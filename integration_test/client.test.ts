import { connect } from "node:net";
import { execFileSync } from "node:child_process";
import { describe, expect, test, beforeEach } from "@jest/globals";

import { Client } from "@lancedb/arrow-flight-sql-client";

async function isLocalServerRunning(): Promise<boolean> {
  console.log("Testing local server connection");
  return new Promise((resolve) => {
    const sock = connect({ timeout: 0.2, host: "localhost", port: 31337 });
    sock.on("connect", () => {
      resolve(true);
      sock.end();
    });
    sock.on("error", () => {
      resolve(false);
    });
  });
}

async function getServer(): Promise<string> {
  if (await isLocalServerRunning()) {
    return "localhost:31337";
  }
  if (process.env.TEST_FLIGHT_SERVER) {
    return process.env.TEST_FLIGHT_SERVER;
  } else {
    return "server:31337";
  }
}

// The test server (sqlflite) does not use TLS.
const CREDENTIALS = { username: "lancedb", password: "password", insecure: true };

describe("initially we", () => {
  let server: string;
  beforeEach(async () => {
    server = await getServer();
  });

  test("can connect to a client", async () => {
    const client = await Client.connect({ host: server, ...CREDENTIALS });
    expect(client).toBeDefined();
  });

  test("are rejected with bad credentials", async () => {
    await expect(Client.connect({ host: server, ...CREDENTIALS, password: "wrong" })).rejects.toThrow(
      /UNAUTHENTICATED/,
    );
  });
});

describe("with a client we can", () => {
  let client: Client;

  beforeEach(async () => {
    client = await Client.connect({ host: await getServer(), ...CREDENTIALS });
  });

  test("issue a simple SQL query", async () => {
    interface ExpectedRecord {
      l_orderkey: bigint;
      l_returnflag: string;
    }

    const queryResult = await client.query("SELECT * FROM lineitem LIMIT 10");
    const result = (await queryResult.collectToObjects()) as ExpectedRecord[];
    expect(result.length).toBe(10);

    expect(result[0].l_orderkey).toBeGreaterThan(0);
    expect(result[1].l_returnflag.length).toBeGreaterThan(0);
  });

  test("return query results as an Arrow table", async () => {
    const queryResult = await client.query("SELECT * FROM lineitem LIMIT 10");
    const result = await queryResult.collectToArrow();
    expect(result).toBeDefined();
    expect(result.length).toBe(1);
    const batch = result[0];
    expect(batch.numRows).toBe(10);
  });

  test("get an empty result set", async () => {
    const queryResult = await client.query("SELECT * FROM lineitem WHERE 1 = 0");
    const batches = await queryResult.collectToArrow();
    for (const batch of batches) {
      expect(batch.numRows).toBe(0);
      expect(batch.schema.fields.map((f: { name: string }) => f.name)).toContain("l_orderkey");
    }

    const rows = await (await client.query("SELECT * FROM lineitem WHERE 1 = 0")).collectToObjects();
    expect(rows).toEqual([]);
  });

  test("read every batch of a multi-batch result", async () => {
    const [{ n }] = (await (await client.query("SELECT COUNT(*) AS n FROM lineitem")).collectToObjects()) as {
      n: bigint;
    }[];
    const expectedRows = Number(n);
    expect(expectedRows).toBeGreaterThan(1000);

    const batches = await (await client.query("SELECT * FROM lineitem")).collectToArrow();
    expect(batches.length).toBeGreaterThan(1);
    expect(batches.reduce((total: number, batch: { numRows: number }) => total + batch.numRows, 0)).toBe(expectedRows);

    const rows = await (await client.query("SELECT * FROM lineitem")).collectToObjects();
    expect(rows.length).toBe(expectedRows);
  });

  test("map SQL types to JavaScript values", async () => {
    // sqlflite is backed by DuckDB, so this uses DuckDB's literal and cast syntax.
    const sql = `SELECT
      1::INTEGER AS i,
      42::BIGINT AS big,
      1.5::DOUBLE AS d,
      'abc' AS s,
      'héllo ✓' AS uni,
      TRUE AS b,
      NULL AS nul,
      DATE '2024-01-02' AS dt,
      TIMESTAMP '2024-01-02 03:04:05' AS ts,
      CAST(1.25 AS DECIMAL(10,2)) AS dec`;
    const rows = await (await client.query(sql)).collectToObjects();
    expect(rows).toHaveLength(1);
    const row = rows[0] as Record<string, unknown>;

    expect(row.i).toBe(1);
    expect(row.big).toBe(BigInt(42));
    expect(row.d).toBe(1.5);
    expect(row.s).toBe("abc");
    expect(row.uni).toBe("héllo ✓");
    expect(row.b).toBe(true);
    expect(row.nul).toBeNull();
    // Dates and timestamps come back as epoch milliseconds.
    expect(row.dt).toBe(Date.UTC(2024, 0, 2));
    expect(row.ts).toBe(Date.UTC(2024, 0, 2, 3, 4, 5));
    // Decimals are returned as their scaled integer digits.
    expect(String(row.dec)).toBe("125");
  });

  test("get a server error for invalid SQL", async () => {
    await expect(client.query("SELECT * FROM no_such_table")).rejects.toThrow(/no_such_table/);
  });

  test("stop reading a stream early and keep using the client", async () => {
    const queryResult = await client.query("SELECT * FROM lineitem");
    let batchesSeen = 0;
    for await (const batch of queryResult.toArrowStream()) {
      expect(batch.numRows).toBeGreaterThan(0);
      batchesSeen += 1;
      break;
    }
    expect(batchesSeen).toBe(1);

    const rows = await (await client.query("SELECT 1 AS one")).collectToObjects();
    expect(rows).toHaveLength(1);
  });

  test("issue concurrent queries without hanging", async () => {
    // sqlflite cannot execute statements concurrently on its single DuckDB connection, so some of
    // these may fail server-side.  What we verify here is the client's behaviour: every query settles,
    // successes return the right rows, failures are real errors, and the client stays usable afterward.
    const timeout = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("concurrent queries did not settle")), 20_000).unref(),
    );
    const queries = [5, 10, 15, 20].map(async (limit) => {
      const rows = await (await client.query(`SELECT * FROM lineitem LIMIT ${limit}`)).collectToObjects();
      return { limit, rows: rows.length };
    });
    const outcomes = await Promise.race([Promise.allSettled(queries), timeout]);

    for (const outcome of outcomes) {
      if (outcome.status === "fulfilled") {
        expect(outcome.value.rows).toBe(outcome.value.limit);
      } else {
        expect(outcome.reason).toBeInstanceOf(Error);
      }
    }

    const rows = await (await client.query("SELECT 1 AS one")).collectToObjects();
    expect(rows).toHaveLength(1);
  });
});

describe("the published package", () => {
  test("can be imported from an ES module", async () => {
    const script = `
      import { Client } from "@lancedb/arrow-flight-sql-client";
      const client = await Client.connect({
        host: process.env.TEST_SERVER,
        username: "lancedb",
        password: "password",
        insecure: true,
      });
      const rows = await (await client.query("SELECT 1 AS one")).collectToObjects();
      console.log("esm-ok", rows.length, rows[0].one);
      process.exit(0);
    `;
    const stdout = execFileSync(process.execPath, ["--input-type=module", "-e", script], {
      cwd: __dirname,
      env: { ...process.env, TEST_SERVER: await getServer() },
      encoding: "utf8",
      timeout: 30_000,
    });
    expect(stdout).toContain("esm-ok 1 1");
  }, 40_000);
});
