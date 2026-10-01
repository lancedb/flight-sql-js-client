import { describe, expect, jest, test } from "@jest/globals";
import { EventEmitter } from "node:events";

import { Metadata as GrpcMetadata } from "@grpc/grpc-js";
import { MessageReader, Table, Utf8, makeVector, tableFromArrays, tableToIPC, vectorFromArray } from "apache-arrow";

import { RecordBatchStream } from "./arrow_util";
import { arrow } from "./generated/flight";
import { Stream } from "./grpc_util";

type FlightData = arrow.flight.protocol.IFlightData;

class FakeCall extends EventEmitter {
  cancel = jest.fn();
}

// The private framing helper, reached through element access so the test can drive it directly.
const createIpcMessage = (RecordBatchStream as unknown as { createIpcMessage: (data: FlightData) => Uint8Array })
  .createIpcMessage;

/**
 * Split an Arrow IPC stream into (header, body) pairs, which is how Flight transmits it:
 * each IPC message becomes one FlightData with the flatbuffer header in `dataHeader`
 * and the buffers in `dataBody`.
 */
function toFlightData(ipcStream: Uint8Array): FlightData[] {
  const reader = new MessageReader(ipcStream);
  const frames: FlightData[] = [];
  let offset = 0;
  for (;;) {
    const message = reader.readMessage();
    if (!message) {
      break;
    }
    const headerLength = new DataView(ipcStream.buffer, ipcStream.byteOffset + offset + 4, 4).getInt32(0, true);
    const dataHeader = ipcStream.subarray(offset + 8, offset + 8 + headerLength);
    const dataBody = reader.readMessageBody(message.bodyLength);
    frames.push({ dataHeader, dataBody });
    offset += 8 + headerLength + message.bodyLength;
  }
  return frames;
}

async function streamFromFrames(frames: FlightData[]): Promise<Stream<FlightData, FlightData>> {
  const call = new FakeCall();
  const stream = new Stream<FlightData, FlightData>(call);
  for (const frame of frames) {
    call.emit("data", frame);
  }
  call.emit("end");
  return stream;
}

async function collectRows(batches: RecordBatchStream): Promise<{ rows: unknown[]; batchCount: number }> {
  const rows: unknown[] = [];
  let batchCount = 0;
  for await (const batch of batches) {
    batchCount += 1;
    rows.push(...batch.toArray().map((row) => row.toJSON()));
  }
  return { rows, batchCount };
}

describe("createIpcMessage", () => {
  test("frames the header and body with a continuation marker and 8-byte padding", () => {
    const dataHeader = Uint8Array.from([1, 2, 3, 4, 5]);
    const dataBody = Uint8Array.from([9, 8, 7]);

    const message = createIpcMessage({ dataHeader, dataBody });

    // 8 byte prefix + 5 byte header + 3 bytes of padding + 3 byte body
    expect(message.length).toBe(8 + 5 + 3 + 3);
    expect(Array.from(message.subarray(0, 4))).toEqual([0xff, 0xff, 0xff, 0xff]);
    expect(new DataView(message.buffer, 4, 4).getInt32(0, true)).toBe(5);
    expect(Array.from(message.subarray(8, 13))).toEqual([1, 2, 3, 4, 5]);
    expect(Array.from(message.subarray(13, 16))).toEqual([0, 0, 0]);
    expect(Array.from(message.subarray(16))).toEqual([9, 8, 7]);
  });

  test("adds no padding when the header is already 8-byte aligned", () => {
    const dataHeader = new Uint8Array(16).fill(1);
    const dataBody = Uint8Array.from([42]);
    const message = createIpcMessage({ dataHeader, dataBody });
    expect(message.length).toBe(8 + 16 + 1);
    expect(message[24]).toBe(42);
  });

  test("handles an empty body, as sent for schema messages", () => {
    const dataHeader = Uint8Array.from([1, 2, 3]);
    const message = createIpcMessage({ dataHeader, dataBody: new Uint8Array(0) });
    expect(message.length).toBe(8 + 3 + 5);
  });

  test("rejects messages with a missing header or body", () => {
    expect(() => createIpcMessage({ dataBody: new Uint8Array(1) })).toThrow("Data header or body missing");
    expect(() => createIpcMessage({ dataHeader: new Uint8Array(1) })).toThrow("Data header or body missing");
  });
});

describe("RecordBatchStream", () => {
  // Plain Utf8 rather than tableFromArrays, which dictionary-encodes string columns.
  const table = new Table({
    id: makeVector(Int32Array.from([1, 2, 3])),
    name: vectorFromArray(["a", "b", "c"], new Utf8()),
  });

  test("reassembles Flight data frames into record batches", async () => {
    const frames = toFlightData(tableToIPC(table, "stream"));
    // schema message + one record batch
    expect(frames).toHaveLength(2);

    const batches = await RecordBatchStream.create(await streamFromFrames(frames), table.schema);
    expect(batches.schema).toBe(table.schema);

    const { rows, batchCount } = await collectRows(batches);
    expect(batchCount).toBe(1);
    expect(rows).toEqual([
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 3, name: "c" },
    ]);
  });

  test("preserves batch boundaries across multiple record batches", async () => {
    const second = new Table({
      id: makeVector(Int32Array.from([4, 5])),
      name: vectorFromArray(["d", "e"], new Utf8()),
    });
    const combined = table.concat(second);
    const frames = toFlightData(tableToIPC(combined, "stream"));
    // schema message + two record batches
    expect(frames).toHaveLength(3);

    const batches = await RecordBatchStream.create(await streamFromFrames(frames), combined.schema);
    const { rows, batchCount } = await collectRows(batches);
    expect(batchCount).toBe(2);
    expect(rows.map((row) => (row as { id: number }).id)).toEqual([1, 2, 3, 4, 5]);
  });

  test("ignores metadata-only envelopes mixed into the stream", async () => {
    const frames = toFlightData(tableToIPC(table, "stream"));
    const call = new FakeCall();
    const stream = new Stream<FlightData, FlightData>(call);
    call.emit("metadata", new GrpcMetadata());
    call.emit("data", frames[0]);
    call.emit("status", { code: 0, metadata: new GrpcMetadata() });
    call.emit("data", frames[1]);
    call.emit("end");

    const batches = await RecordBatchStream.create(stream, table.schema);
    const { rows } = await collectRows(batches);
    expect(rows).toHaveLength(3);
  });

  test("yields a single empty batch for a schema-only stream", async () => {
    // This is how the Arrow reader represents an empty result: one zero-row batch carrying the schema.
    const frames = toFlightData(tableToIPC(table, "stream")).slice(0, 1);
    const batches = await RecordBatchStream.create(await streamFromFrames(frames), table.schema);
    let numRows = -1;
    let batchCount = 0;
    for await (const batch of batches) {
      batchCount += 1;
      numRows = batch.numRows;
      expect(batch.schema.fields.map((f) => f.name)).toEqual(["id", "name"]);
    }
    expect(batchCount).toBe(1);
    expect(numRows).toBe(0);
  });

  test("decodes dictionary-encoded columns, which arrive as an extra dictionary batch", async () => {
    const encoded = tableFromArrays({ id: Int32Array.from([1, 2]), name: ["x", "y"] });
    const frames = toFlightData(tableToIPC(encoded, "stream"));
    // schema message + dictionary batch + record batch
    expect(frames).toHaveLength(3);

    const batches = await RecordBatchStream.create(await streamFromFrames(frames), encoded.schema);
    const { rows } = await collectRows(batches);
    expect(rows).toEqual([
      { id: 1, name: "x" },
      { id: 2, name: "y" },
    ]);
  });
});
