import {
  loadPackageDefinition,
  GrpcObject,
  ServiceClientConstructor,
  credentials,
  Metadata as GrpcMetadata,
} from "@grpc/grpc-js";
import { loadSync, Long } from "@grpc/proto-loader";
import { arrow } from "./generated/flight";
import { RecordBatchStreamReader, Schema } from "apache-arrow";
import { Bidirectional, Stream } from "./grpc_util";
import { RecordBatchStream } from "./arrow_util";

// When developing we load files from ../protos
// In production we load files from the same directory as JS files
const PROTO_PATHS = [__dirname + "/../protos", __dirname];

/**
 * A FlightInfo describes the schema and location of a flight.
 */
export class FlightInfo implements arrow.flight.protocol.IFlightInfo {
  private inner: arrow.flight.protocol.IFlightInfo;
  private decodedSchema_?: Schema;

  constructor(inner: arrow.flight.protocol.IFlightInfo) {
    this.inner = inner;
  }

  /**
   * The schema of the flight, decoded from the schema buffer into an Arrow Schema object.
   */
  public get decodedSchema(): Schema | null {
    if (!this.decodedSchema_) {
      if (!this.schema) {
        return null;
      }
      const reader = RecordBatchStreamReader.from(this.schema);
      const batches = reader.readAll();
      this.decodedSchema_ = batches[0].schema;
    }
    return this.decodedSchema_;
  }

  /**
   * The raw schema data for the flight.
   *
   * @see {@link decodedSchema} for the schema as an Arrow Schema object.
   */
  public get schema(): Uint8Array | null | undefined {
    return this.inner.schema;
  }

  /**
   * The descriptor for the flight.
   *
   * This is generally the same as the descriptor used to get the flight info in the first place.
   */
  public get flightDescriptor(): arrow.flight.protocol.IFlightDescriptor | null | undefined {
    return this.inner.flightDescriptor;
  }

  /**
   * The endpoints for the flight.
   *
   * These describe where the data can be retrieved and may include a "ticket" which will be
   * required to actually retrieve the data.
   */
  public get endpoint(): arrow.flight.protocol.IFlightEndpoint[] | null | undefined {
    return this.inner.endpoint;
  }

  /**
   * The total number of records in the flight, if known in advance
   */
  public get totalRecords(): number | Long | null | undefined {
    return this.inner.totalRecords;
  }

  /**
   * The total number of bytes in the flight, if known in advance
   */
  public get totalBytes(): number | Long | null | undefined {
    return this.inner.totalBytes;
  }

  /**
   * Whether the data in the flight is ordered or not, if known
   */
  public get ordered(): boolean | null | undefined {
    return this.inner.ordered;
  }

  /**
   * The application-specific metadata for the flight, if any
   */
  public get appMetadata(): Uint8Array | null | undefined {
    return this.inner.appMetadata;
  }
}

/**
 * A client for the Arrow Flight protocol.
 */
export class FlightClient {
  private protoDescriptor: GrpcObject;
  // TODO: Figure out why protobuf gen is not generating correct method signatures for FlightService
  // It doesn't seem to support streaming methods and types them all as RPCUnary.  For now we just use
  // any to avoid the type errors.

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private client: any;
  private default_metadata: Record<string, string>;

  /**
   * Create a new FlightClient.
   *
   * No actual messages are sent yet.
   *
   * @param host The hostname / port of the server, separated by a colon
   * @param insecure If true, connect without TLS.  Defaults to true (no TLS), matching the behavior of
   *   earlier releases.  Set to false to connect with TLS.
   */
  public constructor(host: string, insecure: boolean = true) {
    const packageDefinition = loadSync("Flight.proto", {
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
      includeDirs: PROTO_PATHS,
    });
    this.protoDescriptor = loadPackageDefinition(packageDefinition);
    this.default_metadata = {};
    const arrow = this.protoDescriptor.arrow as GrpcObject;
    const flight = arrow.flight as GrpcObject;
    const flight_protocol = flight.protocol as GrpcObject;
    const flight_service = flight_protocol.FlightService as ServiceClientConstructor;
    const channelCredentials = insecure ? credentials.createInsecure() : credentials.createSsl();
    this.client = new flight_service(host, channelCredentials, {}) as unknown as arrow.flight.protocol.FlightService;
  }

  // Merges any call-specific metadata with the client's default metadata
  private get_metadata(custom_metadata?: Record<string, string>): GrpcMetadata {
    const metadata = new GrpcMetadata();
    for (const key in this.default_metadata) {
      metadata.set(key, this.default_metadata[key]);
    }
    if (custom_metadata) {
      for (const key in custom_metadata) {
        metadata.set(key, custom_metadata[key]);
      }
    }
    return metadata;
  }

  /**
   * Sets the default metadata to be sent on all calls.
   *
   * Typically this is the authorization token.
   * @param metadata The metadata to send
   */
  public set_default_metadata(metadata: Record<string, string>): void {
    this.default_metadata = metadata;
  }

  /**
   * Execute a handshake with the server.
   * @param metadata Call specific metadata to send
   * @returns A bidirectional stream of handshake messages
   */
  public handshake(
    metadata: Record<string, string>,
  ): Bidirectional<
    arrow.flight.protocol.IHandshakeRequest,
    arrow.flight.protocol.IHandshakeResponse,
    arrow.flight.protocol.IHandshakeResponse
  > {
    const call = this.client.handshake(this.get_metadata(metadata));
    return new Bidirectional(call, arrow.flight.protocol.HandshakeRequest.encode);
  }

  /**
   * Get info about a flight.
   * @param descriptor Describes the flight to get info about (i.e. path or command)
   * @returns The flight info
   */
  public async getFlightInfo(descriptor: arrow.flight.protocol.IFlightDescriptor): Promise<FlightInfo> {
    return new Promise((resolve, reject) => {
      this.client.getFlightInfo(
        descriptor,
        this.get_metadata(),
        (err: unknown, info: arrow.flight.protocol.IFlightInfo) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(new FlightInfo(info));
        },
      );
    });
  }

  /**
   * Retrieve the data for a flight.
   * @param ticket A ticket, obtained by an earlier call to getFlightInfo
   * @param schema The expected schema of the data
   * @returns A stream of record batches
   */
  public async doGet(ticket: arrow.flight.protocol.ITicket, schema: Schema): Promise<RecordBatchStream> {
    const call = this.client.doGet(ticket, this.get_metadata());
    const rawStream = new Stream<arrow.flight.protocol.IFlightData, arrow.flight.protocol.IFlightData>(call);
    return await RecordBatchStream.create(rawStream, schema);
  }
}
