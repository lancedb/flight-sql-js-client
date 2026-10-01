import { beforeEach, describe, expect, jest, test } from "@jest/globals";

import { SimpleChannel, lastValueFrom, firstValueFrom } from "./async_util";

describe("given an async iterable", () => {
  class CustomIterable {
    returned = false;
    value = 0;

    [Symbol.asyncIterator]() {
      return this;
    }

    async next() {
      if (this.value < 3) {
        const val = this.value;
        this.value += 1;
        return {
          done: false,
          value: val,
        };
      } else {
        return {
          done: true,
          value: undefined,
        };
      }
    }

    async return(value: unknown) {
      this.returned = true;
      return {
        done: true,
        value: value,
      };
    }
  }

  let customIterable: CustomIterable;
  beforeEach(() => {
    customIterable = new CustomIterable();
  });

  test("can grab last value", async () => {
    const last = await lastValueFrom(customIterable);
    expect(last).toBe(2);
    // We don't return early if we're grabbing the last value since the iterator exhausts
    // normally.
    expect(customIterable.returned).toBe(false);
  });

  test("can grab first value", async () => {
    const first = await firstValueFrom(customIterable);
    // firstValueFrom should call `return` on the iterator, this is important because
    // we want to cancel an underlying GRPC call if we've stopped listening to it
    expect(first).toBe(0);
    expect(customIterable.returned).toBe(true);
  });
});

describe("SimpleChannel", () => {
  test("delivers values that were pushed before anyone asked", async () => {
    const channel = new SimpleChannel<number>(null);
    channel.push(1);
    channel.push(2);
    expect(await channel.next()).toEqual({ done: false, value: 1 });
    expect(await channel.next()).toEqual({ done: false, value: 2 });
  });

  test("delivers values to a consumer that is already waiting", async () => {
    const channel = new SimpleChannel<number>(null);
    const pending = channel.next();
    channel.push(5);
    expect(await pending).toEqual({ done: false, value: 5 });
  });

  test("delivers errors as rejections, in order with values", async () => {
    const channel = new SimpleChannel<number>(null);
    channel.push(1);
    channel.push_err(new Error("bad"));
    channel.push(2);
    expect(await channel.next()).toEqual({ done: false, value: 1 });
    await expect(channel.next()).rejects.toThrow("bad");
    expect(await channel.next()).toEqual({ done: false, value: 2 });
  });

  test("rejects a waiting consumer when an error arrives", async () => {
    const channel = new SimpleChannel<number>(null);
    const pending = channel.next();
    channel.push_err(new Error("late"));
    await expect(pending).rejects.toThrow("late");
  });

  test("close resolves waiting consumers with done", async () => {
    const channel = new SimpleChannel<number>(null);
    const pending = channel.next();
    channel.close();
    expect(await pending).toEqual({ done: true, value: undefined });
    expect(await channel.next()).toEqual({ done: true, value: undefined });
  });

  test("values queued before close are still drained", async () => {
    const channel = new SimpleChannel<number>(null);
    channel.push(1);
    channel.close();
    expect(await channel.next()).toEqual({ done: false, value: 1 });
    expect(await channel.next()).toEqual({ done: true, value: undefined });
  });

  test("ignores pushes after close", async () => {
    const channel = new SimpleChannel<number>(null);
    channel.close();
    channel.push(1);
    channel.push_err(new Error("ignored"));
    expect(await channel.next()).toEqual({ done: true, value: undefined });
  });

  test("return invokes the cancel callback and ends iteration", async () => {
    const onCancel = jest.fn();
    const channel = new SimpleChannel<number>(onCancel);
    channel.push(1);
    expect(await channel.return()).toEqual({ done: true, value: undefined });
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  test("throw also invokes the cancel callback", async () => {
    const onCancel = jest.fn();
    const channel = new SimpleChannel<number>(onCancel);
    expect(await channel.throw()).toEqual({ done: true, value: undefined });
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  test("breaking out of for-await cancels the channel", async () => {
    const onCancel = jest.fn();
    const channel = new SimpleChannel<number>(onCancel);
    channel.push(1);
    channel.push(2);
    for await (const value of channel) {
      expect(value).toBe(1);
      break;
    }
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  test("exhausting the channel normally does not cancel", async () => {
    const onCancel = jest.fn();
    const channel = new SimpleChannel<number>(onCancel);
    channel.push(1);
    channel.close();
    expect(await lastValueFrom(channel)).toBe(1);
    expect(onCancel).not.toHaveBeenCalled();
  });
});
