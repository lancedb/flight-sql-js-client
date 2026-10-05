import { RecordBatchStream } from "./arrow_util";
import { FlightSqlClient } from "./flightsql";
import { arrow as fsql } from "./generated/flightsql";
import { RecordBatch } from "apache-arrow";
import { pipe, toArray } from "iter-ops";

/**
 * Options for creating a new client.
 */
export interface ClientOptions {
  /**
   * The host and port to connect to, separated by a colon
   */
  host: string;
  /**
   * The username to login as
   */
  username: string;
  /**
   * The password to login with
   */
  password: string;
  /**
   * The default database to use (non-standard, only supported on some servers)
   */
  defaultDatabase?: string;
  /**
   * Is the server using TLS?  If so, this must be set to false.
   *
   * Defaults to true, meaning the connection is made without TLS.  This matches the behavior of
   * earlier releases, which always connected without TLS.
   *
   * The default will change to false (TLS) in a future release.  Set this option explicitly to
   * avoid a warning and to keep your connection behavior stable across that change.
   */
  insecure?: boolean;
}

/**
 * A query to execute.
 */
export interface Query {
  /**
   * The SQL text to execute
   */
  text: string;
  /**
   * The values to bind to the query
   */
  values: unknown[];
}

/**
 * The result of a query.
 *
 * The result data can be fetched in a variety of formats.  In most cases, if the returned data is reasonably
 * small, it is best to use `collectToObjects` to get the data as an array of plain JS objects.
 */
export class QueryResult {
  private raw: RecordBatchStream;

  constructor(raw: RecordBatchStream) {
    this.raw = raw;
  }

  /**
   * Convert the result to a stream of Arrow record batches.
   *
   * Warning: The Arrow package uses a number of `instanceof` checks to determine the type of objects.  For
   * these to work correctly, the Arrow package your application is using  must be the exact same version
   * used by this package.  In addition, the Arrow package must be loaded in the same context as this package.
   * This process can often fail in the presence of bundlers like Webpack or Rollup.
   *
   * If you are using a bundler, it is recommended to use `collectToObjects` instead.
   *
   * @returns a stream of Arrow record batches
   */
  public toArrowStream(): AsyncIterable<RecordBatch> {
    return this.raw;
  }

  /**
   * Consume all results into an array of Arrow record batches.
   *
   * Warning: @see toArrowStream for details on the Arrow package versioning requirements.
   * Warning: This will fully consume the stream, so if the stream is large, this may consume a lot of memory.
   * @returns an array of Arrow record batches
   */
  public async collectToArrow(): Promise<RecordBatch[]> {
    const batches = await pipe(this.raw, toArray()).first;
    return batches ?? [];
  }

  /**
   * Consume all results into an array of plain JS objects.
   *
   * Warning: This will fully consume the stream, so if the stream is large, this may consume a lot of memory.
   * @returns an array of plain JS objects
   */
  public async collectToObjects(): Promise<unknown[]> {
    const collectedBatches = await this.collectToArrow();
    const batchesOfRows = collectedBatches.map((batch) => batch.toArray());
    if (batchesOfRows.length == 0) {
      return [];
    } else if (batchesOfRows.length == 1) {
      return batchesOfRows[0];
    } else {
      const first = batchesOfRows[0];
      const rest = batchesOfRows.slice(1);
      return first.concat(...rest);
    }
  }
}

/**
 * A client for executing SQL queries against a Flight SQL server.
 */
export class Client {
  private sql: FlightSqlClient;

  private constructor(sql: FlightSqlClient) {
    this.sql = sql;
  }

  /**
   * Connect to a Flight SQL server.
   * @param options client options to use for connection
   * @returns A client that can be used to execute queries
   */
  public static async connect(options: ClientOptions): Promise<Client> {
    if (options.insecure === undefined) {
      console.warn(
        "@lancedb/arrow-flight-sql-client: the `insecure` option was not set, so the connection will be made without TLS. " +
          "This default will change to TLS (`insecure: false`) in a future release. " +
          "Set `insecure` explicitly to silence this warning.",
      );
    }
    const sql = await FlightSqlClient.connect(
      options.host,
      options.username,
      options.password,
      options.defaultDatabase,
      options.insecure,
    );
    return new Client(sql);
  }

  /**
   * Query the server with an SQL statement.
   *
   * Note: only read-only queries are supported.
   *
   * @param sql the SQL statement to execute
   * @returns the result of the query
   */
  public async query(sql: string): Promise<QueryResult> {
    const query: fsql.flight.protocol.sql.ICommandStatementQuery = {
      query: sql,
    };
    const batches = await this.sql.statementQuery(query);
    return new QueryResult(batches);
  }
}
