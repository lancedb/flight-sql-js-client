import { RecordBatchStreamReader, Schema } from "apache-arrow";
import { arrow } from "./generated/flight";
import { Envelope, Stream } from "./grpc_util";

type FlightData = arrow.flight.protocol.IFlightData;

async function* ipcChunks(responses: AsyncIterable<Envelope<FlightData>>): AsyncGenerator<Uint8Array> {
  for await (const { data } of responses) {
    if (!data) continue;
    const { dataHeader, dataBody } = data;
    if (!dataHeader?.length) {
      if (dataBody?.length) throw new Error("Flight data body without an IPC header");
      continue; // Application metadata without an IPC message.
    }

    const paddedLength = dataHeader.length + ((8 - (dataHeader.length % 8)) % 8);
    const metadata = new Uint8Array(8 + paddedLength);
    const prefix = new DataView(metadata.buffer);
    prefix.setInt32(0, -1, true);
    prefix.setInt32(4, paddedLength, true);
    metadata.set(dataHeader, 8);
    yield metadata;
    if (dataBody?.length) yield dataBody;
  }

  // End-of-stream continuation marker followed by a zero metadata length.
  yield Uint8Array.of(255, 255, 255, 255, 0, 0, 0, 0);
}

/** An async iterator of Arrow record batches that also has a schema. */
export class RecordBatchStream {
  private constructor(
    private readonly chunks: AsyncIterable<Uint8Array>,
    public readonly schema: Schema,
  ) {}

  public static async create(dataStream: Stream<FlightData, FlightData>, schema: Schema): Promise<RecordBatchStream> {
    const chunks = ipcChunks(dataStream.responses);
    // DoGet startup errors should still reach the caller awaiting the query.
    const first = await chunks.next();
    async function* fromStart() {
      try {
        if (!first.done) yield first.value;
        yield* chunks;
      } finally {
        await chunks.return(undefined);
      }
    }
    return new RecordBatchStream(fromStart(), schema);
  }

  public async collectToIpc(): Promise<Uint8Array[]> {
    const result = [];
    for await (const chunk of this.chunks) result.push(chunk);
    return result;
  }

  public async *[Symbol.asyncIterator]() {
    yield* await RecordBatchStreamReader.from(this.chunks);
  }
}
