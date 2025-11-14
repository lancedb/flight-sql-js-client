import { connect } from "node:net";
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

describe("initially we", () => {
  let server: string;
  beforeEach(async () => {
    server = await getServer();
  });

  test("can connect to a client", async () => {
    const client = await Client.connect({
      host: server,
      username: "lancedb",
      password: "password",
    });
    expect(client).toBeDefined();
  });
});

describe("with a client we can", () => {
  let client: Client;

  beforeEach(async () => {
    client = await Client.connect({
      host: await getServer(),
      username: "lancedb",
      password: "password",
    });
  });

  test("issue a simple SQL query", async () => {
    interface ExpectedRecord {
      l_orderkey: number;
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
});
