import { RecordBatchStream } from "./arrow_util";
import { FlightClient } from "./flight";

import { arrow } from "./generated/flight";
import { arrow as fsql } from "./generated/flightsql";
import { google } from "./generated/any";
import { firstValueFrom } from "./async_util";

// Some quick duck-typing to state what we expect from protobuf messages
interface WriterLike {
  finish(): Uint8Array;
}

// Some quick duck-typing to state what we expect from protobuf messages
// (used in FlightSqlClient.packAny)
interface MessageLike {
  getTypeUrl(prefix?: string): string;
  encode(message: unknown): WriterLike;
}

/**
 * A client for the Flight SQL API.
 */
export class FlightSqlClient {
  private flight: FlightClient;

  // Use the static connect method to create a new instance.
  private constructor(flight: FlightClient) {
    this.flight = flight;
  }

  private async login(username: string, password: string, defaultDatabase?: string): Promise<void> {
    // Most servers seem to use Basic auth for the handshake to get a token.
    // The GRPC headers (and not the handshake request / response) are used to
    // transmit the username, password, and token.
    const auth = "Basic " + btoa(username + ":" + password);
    const call = this.flight.handshake({
      authorization: auth,
    });
    // This seems pretty much unused by the server but we send it anyways
    const hello: arrow.flight.protocol.IHandshakeRequest = {
      payload: new Uint8Array(),
      protocolVersion: 0,
    };
    call.send(hello);
    try {
      // The method is defined as a streaming method but all instances I've encountered so far send
      // a single response.
      //
      // The logic here is maybe not ideal.  If a server someone sends an empty metadata message and then
      // a populated data payload message, then we will see the empty payload message first and fail to
      // wait for the next message.  We can optimize this later if we see it in the wild.
      const helloRsp = await firstValueFrom(call.responses);

      const defaultMetadata: Record<string, string> = {};
      if (defaultDatabase) {
        defaultMetadata["database"] = defaultDatabase;
      }

      if (helloRsp?.data?.payload) {
        // If we get a payload prefer that as a token
        const payload = new TextDecoder().decode(helloRsp.data.payload);
        defaultMetadata["authorization"] = "Bearer " + payload;
        this.flight.set_default_metadata(defaultMetadata);
      } else if (helloRsp?.metadata) {
        // Otherwise if we get metadata then use that as the token
        const authorization = helloRsp.metadata.get_first_string("authorization");
        if (!authorization) {
          throw new Error("Handshake failed, metadata received but no authorization header present");
        }
        defaultMetadata["authorization"] = authorization;
        this.flight.set_default_metadata(defaultMetadata);
      } else {
        throw new Error("Handshake failed, no metadata or data received from server before call completed");
      }
    } finally {
      // Since we are only taking the first value we should cancel just in case the sender is trying
      // to send more values.
      //
      // TODO: Investigate if this is redundant.  firstValueFrom should call the return method on the
      // iterator which should cancel the call.
      call.cancel();
    }
  }

  /**
   * Connect to a Flight SQL server.
   *
   * This method will perform a handshake with the server and return a client that can be used to
   * execute queries.
   *
   * @param host The hostname / port of the server, separated by a colon
   * @param username The username to use for the handshake
   * @param password The password to use for the handshake
   * @returns A client that can be used to execute queries
   */
  public static async connect(
    host: string,
    username: string,
    password: string,
    defaultDatabase?: string,
  ): Promise<FlightSqlClient> {
    const sql = new FlightClient(host);
    const client = new FlightSqlClient(sql);
    await client.login(username, password, defaultDatabase);
    return client;
  }

  // Helper method to create a protobuf Any message
  private static packAny(message: MessageLike, thing: unknown): Uint8Array {
    const packed: google.protobuf.IAny = {
      typeUrl: message.getTypeUrl(),
      value: message.encode(thing).finish(),
    };
    return google.protobuf.Any.encode(packed).finish();
  }

  // A "command" is a type of Flight descriptor that has no path.  FlightSQL makes frequent use of these.
  private static makeCmd(message: MessageLike, thing: unknown): arrow.flight.protocol.IFlightDescriptor {
    const cmd = FlightSqlClient.packAny(message, thing);
    return {
      type: arrow.flight.protocol.FlightDescriptor.DescriptorType.CMD,
      cmd,
    };
  }

  /**
   * Query the server with an SQL statement.
   * @param query the query to send
   * @returns a stream of record batches that contain the results of the query
   */
  public async statementQuery(query: fsql.flight.protocol.sql.ICommandStatementQuery): Promise<RecordBatchStream> {
    const cmd = FlightSqlClient.makeCmd(fsql.flight.protocol.sql.CommandStatementQuery, query);

    // We first call getFlightInfo to "start the query" and then call doGet to get the actual data.
    const ticket_call = await this.flight.getFlightInfo(cmd);
    const schema = ticket_call.decodedSchema;

    if (!schema) {
      throw new Error("No schema provided by server");
    }

    if (!ticket_call.endpoint) {
      throw new Error("No endpoint provided by server");
    }
    if (ticket_call.endpoint.length !== 1) {
      throw new Error("Expected exactly one endpoint");
    }
    const endpoint = ticket_call.endpoint[0];
    if (endpoint.location && endpoint.location.length > 0) {
      throw new Error("Cannot handle remote location: " + endpoint.location);
    }

    if (!endpoint.ticket) {
      throw new Error("No ticket provided by server");
    }
    const ticket = endpoint.ticket;

    return this.flight.doGet(ticket, schema);
  }
}
