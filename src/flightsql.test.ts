import { beforeEach, describe, expect, jest, test } from "@jest/globals";

import { Metadata as GrpcMetadata } from "@grpc/grpc-js";
import { Field, Int32, Schema } from "apache-arrow";

import { RecordBatchStream } from "./arrow_util";
import { FlightClient, FlightInfo } from "./flight";
import { FlightSqlClient } from "./flightsql";
import { google } from "./generated/any";
import { arrow } from "./generated/flight";
import { arrow as fsql } from "./generated/flightsql";
import { Envelope, Metadata } from "./grpc_util";

jest.mock("./flight", () => ({
  FlightClient: jest.fn(),
}));

const MockedFlightClient = jest.mocked(FlightClient);

type HandshakeResponse = arrow.flight.protocol.IHandshakeResponse;

async function* envelopes(...items: Envelope<HandshakeResponse>[]): AsyncGenerator<Envelope<HandshakeResponse>> {
  for (const item of items) {
    yield item;
  }
}

function metadataWith(values: Record<string, string>): Metadata {
  const inner = new GrpcMetadata();
  for (const [key, value] of Object.entries(values)) {
    inner.set(key, value);
  }
  return new Metadata(inner);
}

function makeFakeFlight(handshakeResponses: Envelope<HandshakeResponse>[]) {
  const handshakeCall = {
    send: jest.fn(),
    cancel: jest.fn(),
    responses: envelopes(...handshakeResponses),
  };
  const flight = {
    handshake: jest.fn<(metadata: Record<string, string>) => typeof handshakeCall>(() => handshakeCall),
    set_default_metadata: jest.fn(),
    getFlightInfo: jest.fn<(descriptor: arrow.flight.protocol.IFlightDescriptor) => Promise<FlightInfo>>(),
    doGet: jest.fn<(ticket: arrow.flight.protocol.ITicket, schema: Schema) => Promise<RecordBatchStream>>(),
  };
  (MockedFlightClient as unknown as jest.Mock).mockImplementation(() => flight);
  return { flight, handshakeCall };
}

const tokenPayload = (token: string): Envelope<HandshakeResponse> => ({
  data: { payload: new TextEncoder().encode(token) },
});

beforeEach(() => {
  MockedFlightClient.mockReset();
});

describe("FlightSqlClient.connect", () => {
  test("sends Basic auth on the handshake and keeps the payload as a Bearer token", async () => {
    const { flight, handshakeCall } = makeFakeFlight([tokenPayload("tok123")]);

    await FlightSqlClient.connect("db.example:443", "alice", "s3cret");

    expect(flight.handshake).toHaveBeenCalledWith({ authorization: "Basic " + btoa("alice:s3cret") });
    expect(handshakeCall.send).toHaveBeenCalledWith({ payload: new Uint8Array(), protocolVersion: 0 });
    expect(flight.set_default_metadata).toHaveBeenCalledWith({ authorization: "Bearer tok123" });
    expect(handshakeCall.cancel).toHaveBeenCalledTimes(1);
  });

  test("falls back to the authorization header when the server answers with metadata", async () => {
    const { flight } = makeFakeFlight([{ metadata: metadataWith({ authorization: "Bearer from-metadata" }) }]);

    await FlightSqlClient.connect("db.example:443", "alice", "s3cret");

    expect(flight.set_default_metadata).toHaveBeenCalledWith({ authorization: "Bearer from-metadata" });
  });

  test("prefers a payload token over metadata when both arrive", async () => {
    const { flight } = makeFakeFlight([tokenPayload("payload-token")]);
    await FlightSqlClient.connect("db.example:443", "alice", "s3cret");
    expect(flight.set_default_metadata).toHaveBeenCalledWith({ authorization: "Bearer payload-token" });
  });

  test("rejects when metadata arrives without an authorization header", async () => {
    const { flight, handshakeCall } = makeFakeFlight([{ metadata: metadataWith({ "x-other": "1" }) }]);

    await expect(FlightSqlClient.connect("db.example:443", "alice", "s3cret")).rejects.toThrow(
      "no authorization header present",
    );
    expect(flight.set_default_metadata).not.toHaveBeenCalled();
    expect(handshakeCall.cancel).toHaveBeenCalledTimes(1);
  });

  test("rejects when the handshake completes without any response", async () => {
    const { handshakeCall } = makeFakeFlight([]);

    await expect(FlightSqlClient.connect("db.example:443", "alice", "s3cret")).rejects.toThrow(
      "no metadata or data received",
    );
    expect(handshakeCall.cancel).toHaveBeenCalledTimes(1);
  });

  test("includes the default database alongside the token", async () => {
    const { flight } = makeFakeFlight([tokenPayload("tok")]);

    await FlightSqlClient.connect("db.example:443", "alice", "s3cret", "analytics");

    expect(flight.set_default_metadata).toHaveBeenCalledWith({ database: "analytics", authorization: "Bearer tok" });
  });

  test("uses TLS by default and plaintext only when insecure is set", async () => {
    makeFakeFlight([tokenPayload("tok")]);
    await FlightSqlClient.connect("db.example:443", "alice", "s3cret");
    expect(MockedFlightClient).toHaveBeenLastCalledWith("db.example:443", false);

    makeFakeFlight([tokenPayload("tok")]);
    await FlightSqlClient.connect("localhost:31337", "alice", "s3cret", undefined, true);
    expect(MockedFlightClient).toHaveBeenLastCalledWith("localhost:31337", true);
  });
});

describe("FlightSqlClient.statementQuery", () => {
  const schema = new Schema([new Field("a", new Int32())]);
  const ticket = { ticket: Uint8Array.from([1, 2, 3]) };

  async function connectedClient(flightInfo: Partial<FlightInfo>) {
    const { flight } = makeFakeFlight([tokenPayload("tok")]);
    flight.getFlightInfo.mockResolvedValue(flightInfo as FlightInfo);
    const client = await FlightSqlClient.connect("db.example:443", "alice", "s3cret");
    return { client, flight };
  }

  test("wraps the SQL in a CommandStatementQuery inside an Any and fetches the ticket", async () => {
    const { client, flight } = await connectedClient({ decodedSchema: schema, endpoint: [{ ticket }] });
    const stream = {} as RecordBatchStream;
    flight.doGet.mockResolvedValue(stream);

    const result = await client.statementQuery({ query: "SELECT 1" });

    expect(result).toBe(stream);
    expect(flight.getFlightInfo).toHaveBeenCalledTimes(1);
    const descriptor = flight.getFlightInfo.mock.calls[0][0];
    expect(descriptor.type).toBe(arrow.flight.protocol.FlightDescriptor.DescriptorType.CMD);
    const any = google.protobuf.Any.decode(descriptor.cmd!);
    expect(any.typeUrl).toMatch(/arrow\.flight\.protocol\.sql\.CommandStatementQuery$/);
    const command = fsql.flight.protocol.sql.CommandStatementQuery.decode(any.value);
    expect(command.query).toBe("SELECT 1");
    expect(flight.doGet).toHaveBeenCalledWith(ticket, schema);
  });

  test("rejects when the server returns no schema", async () => {
    const { client } = await connectedClient({ decodedSchema: null, endpoint: [{ ticket }] });
    await expect(client.statementQuery({ query: "SELECT 1" })).rejects.toThrow("No schema provided by server");
  });

  test("rejects when the server returns no endpoints", async () => {
    const { client } = await connectedClient({ decodedSchema: schema });
    await expect(client.statementQuery({ query: "SELECT 1" })).rejects.toThrow("No endpoint provided by server");
  });

  test("rejects when the server returns more than one endpoint", async () => {
    const { client } = await connectedClient({ decodedSchema: schema, endpoint: [{ ticket }, { ticket }] });
    await expect(client.statementQuery({ query: "SELECT 1" })).rejects.toThrow("Expected exactly one endpoint");
  });

  test("rejects endpoints that point at a remote location", async () => {
    const { client } = await connectedClient({
      decodedSchema: schema,
      endpoint: [{ ticket, location: [{ uri: "grpc://elsewhere:31337" }] }],
    });
    await expect(client.statementQuery({ query: "SELECT 1" })).rejects.toThrow("Cannot handle remote location");
  });

  test("rejects when the endpoint has no ticket", async () => {
    const { client } = await connectedClient({ decodedSchema: schema, endpoint: [{}] });
    await expect(client.statementQuery({ query: "SELECT 1" })).rejects.toThrow("No ticket provided by server");
  });

  test("propagates errors from getFlightInfo", async () => {
    const { client, flight } = await connectedClient({});
    flight.getFlightInfo.mockRejectedValue(new Error("3 INVALID_ARGUMENT: bad sql"));
    await expect(client.statementQuery({ query: "SELEC" })).rejects.toThrow("bad sql");
    expect(flight.doGet).not.toHaveBeenCalled();
  });
});
