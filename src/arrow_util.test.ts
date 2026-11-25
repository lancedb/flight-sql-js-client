import { EventEmitter } from "node:events";
import { expect, test } from "@jest/globals";
import { Message, Table, tableFromArrays, tableFromIPC, tableToIPC } from "apache-arrow";
import { RecordBatchStream } from "./arrow_util";
import { QueryResult } from "./client";
import { Stream } from "./grpc_util";
import { arrow } from "./generated/flight";

type FlightData = arrow.flight.protocol.IFlightData;

// Split a real Arrow stream at Flight's metadata/body boundary.
function flightMessages(table: Table): FlightData[] {
  const bytes = tableToIPC(table);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const frames: FlightData[] = [];
  for (let offset = 0; ;) {
    const length = view.getInt32(offset + 4, true);
    if (length === 0) return frames;
    const dataHeader = bytes.subarray(offset + 8, offset + 8 + length);
    const bodyStart = offset + 8 + length;
    offset = bodyStart + Message.decode(dataHeader).bodyLength;
    frames.push({ dataHeader, dataBody: bytes.subarray(bodyStart, offset) });
  }
}

class Call extends EventEmitter {
  cancel() {}
}

function query(table: Table, frames: FlightData[], failure?: Error) {
  const call = new Call();
  const stream = new Stream<FlightData, FlightData>(call);
  const result = RecordBatchStream.create(stream, table.schema).then((raw) => new QueryResult(raw));
  for (const frame of frames) call.emit("data", frame);
  if (failure) call.emit("error", failure);
  call.emit("end");
  return result;
}

const table = tableFromArrays({ id: Int32Array.of(1, 2), label: ["north", "south"] });
const multi = new Table(table.schema, [...table.batches, ...table.batches]);

test("collects dictionary and record batches without copying Flight bodies", async () => {
  const frames = flightMessages(multi);
  const result = await query(multi, [{ appMetadata: Uint8Array.of(1) }, ...frames]);
  const chunks = await result.collectToIpc();
  for (const frame of frames.filter((frame) => frame.dataBody?.length)) {
    expect(chunks).toContain(frame.dataBody);
  }
  expect(
    tableFromIPC(chunks)
      .toArray()
      .map((r) => r.toJSON()),
  ).toEqual(multi.toArray().map((r) => r.toJSON()));
  expect(chunks[chunks.length - 1]).toEqual(Uint8Array.of(255, 255, 255, 255, 0, 0, 0, 0));
});

test("retains the schema without any record batches", async () => {
  const [schema] = flightMessages(table);
  const result = await query(table, [{ dataHeader: schema.dataHeader }]);
  const empty = tableFromIPC(await result.collectToIpc());
  expect(empty.numRows).toBe(0);
  expect(empty.schema.fields.map((field) => field.name)).toEqual(["id", "label"]);
});

test("still decodes Flight data for Arrow and object collectors", async () => {
  const frames = flightMessages(multi);
  expect((await (await query(multi, frames)).collectToArrow()).map((batch) => batch.numRows)).toEqual([2, 2]);
  expect(await (await query(multi, frames)).collectToObjects()).toHaveLength(4);
});

test("rejects startup and midstream errors instead of returning partial IPC", async () => {
  const error = new Error("DoGet failed");
  await expect(query(table, [], error)).rejects.toThrow(error);
  const partial = await query(table, flightMessages(table), error);
  await expect(partial.collectToIpc()).rejects.toThrow(error);
});
