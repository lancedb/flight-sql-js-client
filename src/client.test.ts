import { beforeEach, describe, expect, jest, test } from "@jest/globals";

import { RecordBatch, tableFromArrays } from "apache-arrow";

import { RecordBatchStream } from "./arrow_util";
import { Client, QueryResult } from "./client";
import { FlightSqlClient } from "./flightsql";

jest.mock("./flightsql", () => ({
  FlightSqlClient: { connect: jest.fn() },
}));

const mockedConnect = jest.mocked(FlightSqlClient.connect);

function batchOf(values: number[]): RecordBatch {
  return tableFromArrays({ a: Int32Array.from(values) }).batches[0];
}

function streamOf(...batches: RecordBatch[]): RecordBatchStream {
  return {
    schema: batches[0]?.schema,
    async *[Symbol.asyncIterator]() {
      for (const batch of batches) {
        yield batch;
      }
    },
  } as unknown as RecordBatchStream;
}

function plain(rows: unknown[]): unknown[] {
  return rows.map((row) => (row as { toJSON(): unknown }).toJSON());
}

beforeEach(() => {
  mockedConnect.mockReset();
});

describe("Client.connect", () => {
  test("forwards every option to the Flight SQL client", async () => {
    const sql = {} as FlightSqlClient;
    mockedConnect.mockResolvedValue(sql);

    const client = await Client.connect({
      host: "db.example:443",
      username: "alice",
      password: "s3cret",
      defaultDatabase: "analytics",
      insecure: true,
    });

    expect(client).toBeInstanceOf(Client);
    expect(mockedConnect).toHaveBeenCalledWith("db.example:443", "alice", "s3cret", "analytics", true);
  });

  test("leaves optional settings undefined when not provided", async () => {
    mockedConnect.mockResolvedValue({} as FlightSqlClient);
    await Client.connect({ host: "db.example:443", username: "alice", password: "s3cret" });
    expect(mockedConnect).toHaveBeenCalledWith("db.example:443", "alice", "s3cret", undefined, undefined);
  });

  test("surfaces connection failures", async () => {
    mockedConnect.mockRejectedValue(new Error("16 UNAUTHENTICATED: Invalid credentials"));
    await expect(Client.connect({ host: "h", username: "u", password: "p" })).rejects.toThrow("UNAUTHENTICATED");
  });
});

describe("Client.query", () => {
  test("sends the SQL as a statement query and wraps the stream", async () => {
    const stream = streamOf(batchOf([1]));
    const statementQuery = jest.fn<FlightSqlClient["statementQuery"]>().mockResolvedValue(stream);
    mockedConnect.mockResolvedValue({ statementQuery } as unknown as FlightSqlClient);
    const client = await Client.connect({ host: "h", username: "u", password: "p" });

    const result = await client.query("SELECT 1 AS a");

    expect(statementQuery).toHaveBeenCalledWith({ query: "SELECT 1 AS a" });
    expect(result).toBeInstanceOf(QueryResult);
    expect(result.toArrowStream()).toBe(stream);
  });
});

describe("QueryResult", () => {
  test("returns empty results when there are no batches", async () => {
    const result = new QueryResult(streamOf());
    expect(await result.collectToArrow()).toEqual([]);
    expect(await result.collectToObjects()).toEqual([]);
  });

  test("collects a single batch", async () => {
    const result = new QueryResult(streamOf(batchOf([1, 2])));
    const batches = await result.collectToArrow();
    expect(batches).toHaveLength(1);
    expect(batches[0].numRows).toBe(2);

    const rows = await new QueryResult(streamOf(batchOf([1, 2]))).collectToObjects();
    expect(plain(rows)).toEqual([{ a: 1 }, { a: 2 }]);
  });

  test("concatenates several batches in order", async () => {
    const result = new QueryResult(streamOf(batchOf([1, 2]), batchOf([3]), batchOf([4, 5, 6])));
    const rows = await result.collectToObjects();
    expect(plain(rows)).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }]);
  });

  test("skips empty batches when collecting objects", async () => {
    const result = new QueryResult(streamOf(batchOf([]), batchOf([7])));
    expect(plain(await result.collectToObjects())).toEqual([{ a: 7 }]);
  });

  test("toArrowStream can be consumed incrementally", async () => {
    const result = new QueryResult(streamOf(batchOf([1]), batchOf([2])));
    const seen: number[] = [];
    for await (const batch of result.toArrowStream()) {
      seen.push(batch.numRows);
    }
    expect(seen).toEqual([1, 1]);
  });
});
