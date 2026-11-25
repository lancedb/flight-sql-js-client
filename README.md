# JavaScript Client for FlightSQL

This is a JavaScript client for FlightSQL. It allows you to easily query FlightSQL servers from your JavaScript applications.

Warning: This client is still experimental and in heavy development. If you'd like to help contribute, please reach out to us
at the [LanceDB Discord server](https://discord.gg/G5DcmnZWKB).

Currently all testing is done on Node.

## Installation

You can install the client using npm:

```bash
npm install @lancedb/arrow-flight-sql-client
```

## Usage

To use the client, you first need to connect to your database:

```javascript
import { Client } from "@lancedb/arrow-flight-sql-client";

const client = await Client.connect({
  host: "mydb.com:10025",
  username: "lancedb",
  password: "password",
});
```

Once you have connected to your database, you can run queries:

```javascript
const result = await client.query("SELECT * FROM flights WHERE origin = 'SFO'");
```

Query results can be returned in a variety of formats but the simplest thing to do is to return them as an array of objects:

```javascript
interface FlightRecord {
    origin: string;
    destination: string;
}

const flights = (await result.collectToObjects()) as FlightRecord[];
console.log(flights);
```

## Arrow Integration

The client can return query results as an Arrow table. Transferring Arrow data across JavaScript API boundaries
is tricky because the Arrow package uses a number of `instanceof` checks to determine the type of objects. For
these to work correctly, the Arrow package your application is using must be the exact same version
used by this package. In addition, the Arrow package must be loaded in the same context as this package.
This process can often fail in the presence of bundlers like Webpack or Rollup.

To use a separately installed or bundled copy of Arrow, collect the IPC stream and
pass its chunks directly to your application's Arrow reader:

```typescript
import { tableFromIPC } from "apache-arrow";

const result = await client.query("SELECT * FROM flights");
const table = tableFromIPC(await result.collectToIpc());
```

The array contains one complete stream in wire order. It retains the Flight data
buffers in memory without copying them into a single buffer or converting rows to objects.
