import { afterEach, describe, expect, jest, test } from "@jest/globals";
import { EventEmitter } from "node:events";

import { Metadata as GrpcMetadata } from "@grpc/grpc-js";

import { firstValueFrom } from "./async_util";
import { Envelope, Metadata, Stream } from "./grpc_util";

// Mimics the parts of a grpc-js call object that Stream and Bidirectional rely on.
class FakeCall extends EventEmitter {
  cancel = jest.fn();
  write = jest.fn();
}

async function collect<T>(iterable: AsyncIterable<T>): Promise<T[]> {
  const items: T[] = [];
  for await (const item of iterable) {
    items.push(item);
  }
  return items;
}

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Metadata", () => {
  test("get returns every value for a key", () => {
    const inner = new GrpcMetadata();
    inner.add("k", "a");
    inner.add("k", "b");
    expect(new Metadata(inner).get("k")).toEqual(["a", "b"]);
  });

  test("get_first_instance returns the first value or null", () => {
    const inner = new GrpcMetadata();
    inner.add("k", "a");
    inner.add("k", "b");
    const metadata = new Metadata(inner);
    expect(metadata.get_first_instance("k")).toBe("a");
    expect(metadata.get_first_instance("missing")).toBeNull();
  });

  test("get_first_string decodes binary values and passes strings through", () => {
    const inner = new GrpcMetadata();
    inner.set("token-bin", Buffer.from("secret", "utf8"));
    inner.set("plain", "value");
    const metadata = new Metadata(inner);
    expect(metadata.get_first_string("token-bin")).toBe("secret");
    expect(metadata.get_first_string("plain")).toBe("value");
    expect(metadata.get_first_string("missing")).toBeNull();
  });
});

describe("Stream", () => {
  test("yields data envelopes in order and finishes on end", async () => {
    const call = new FakeCall();
    const stream = new Stream<number, number>(call);
    call.emit("data", 1);
    call.emit("data", 2);
    call.emit("end");
    expect(await collect(stream.responses)).toEqual([{ data: 1 }, { data: 2 }]);
  });

  test("applies the message decoder to each message", async () => {
    const call = new FakeCall();
    const stream = new Stream<number, string>(call, (n) => `item-${n}`);
    call.emit("data", 1);
    call.emit("data", 2);
    call.emit("end");
    expect(await collect(stream.responses)).toEqual([{ data: "item-1" }, { data: "item-2" }]);
  });

  test("surfaces initial metadata and trailing metadata from an OK status", async () => {
    const call = new FakeCall();
    const stream = new Stream<number, number>(call);
    const initial = new GrpcMetadata();
    initial.set("authorization", "Bearer abc");
    const trailing = new GrpcMetadata();
    trailing.set("x-trailer", "done");

    call.emit("metadata", initial);
    call.emit("data", 1);
    call.emit("status", { code: 0, metadata: trailing });
    call.emit("end");

    const envelopes = await collect(stream.responses);
    expect(envelopes).toHaveLength(3);
    expect(envelopes[0].metadata).toBeInstanceOf(Metadata);
    expect(envelopes[0].metadata?.get_first_string("authorization")).toBe("Bearer abc");
    expect(envelopes[1]).toEqual({ data: 1 });
    expect(envelopes[2].metadata?.get_first_string("x-trailer")).toBe("done");
  });

  test("propagates a call error to the consumer and does not treat the status as metadata", async () => {
    const call = new FakeCall();
    const stream = new Stream<number, number>(call);
    const iterator = stream.responses[Symbol.asyncIterator]();

    // grpc-js emits "error" and then "status" for a failed call, and "end" once the readable drains.
    call.emit("data", 1);
    call.emit("error", new Error("boom"));
    call.emit("status", { code: 2, metadata: new GrpcMetadata() });
    call.emit("end");

    expect(await iterator.next()).toEqual({ done: false, value: { data: 1 } });
    await expect(iterator.next()).rejects.toThrow("boom");
    expect(await iterator.next()).toEqual({ done: true, value: undefined });
  });

  test("an error with no preceding data rejects the first read", async () => {
    const call = new FakeCall();
    const stream = new Stream<number, number>(call);
    call.emit("error", new Error("unavailable"));
    call.emit("end");
    await expect(collect(stream.responses)).rejects.toThrow("unavailable");
  });

  test("stopping iteration early cancels the underlying call", async () => {
    const call = new FakeCall();
    const stream = new Stream<number, number>(call);
    call.emit("data", 1);
    call.emit("data", 2);

    const first = await firstValueFrom(stream.responses);
    expect(first).toEqual({ data: 1 });
    expect(call.cancel).toHaveBeenCalledTimes(1);
  });

  test("data pushed after the consumer has gone away is dropped", async () => {
    const call = new FakeCall();
    const stream = new Stream<number, number>(call);
    call.emit("data", 1);
    await firstValueFrom(stream.responses);
    call.emit("data", 2);
    const leftover: Envelope<number>[] = await collect(stream.responses);
    expect(leftover).toEqual([]);
  });
});
