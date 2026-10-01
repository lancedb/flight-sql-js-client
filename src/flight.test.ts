import { afterEach, describe, expect, jest, test } from "@jest/globals";

import { credentials } from "@grpc/grpc-js";

import { FlightClient } from "./flight";

afterEach(() => {
  jest.restoreAllMocks();
});

describe("FlightClient", () => {
  test("uses TLS channel credentials by default", () => {
    const createSsl = jest.spyOn(credentials, "createSsl");
    const createInsecure = jest.spyOn(credentials, "createInsecure");

    new FlightClient("db.example:443");

    expect(createSsl).toHaveBeenCalledTimes(1);
    expect(createInsecure).not.toHaveBeenCalled();
  });

  test("uses insecure channel credentials when asked", () => {
    const createSsl = jest.spyOn(credentials, "createSsl");
    const createInsecure = jest.spyOn(credentials, "createInsecure");

    new FlightClient("localhost:31337", true);

    expect(createInsecure).toHaveBeenCalledTimes(1);
    expect(createSsl).not.toHaveBeenCalled();
  });
});
