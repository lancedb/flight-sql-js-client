import { afterEach, describe, expect, jest, test } from "@jest/globals";

import { credentials } from "@grpc/grpc-js";

import { FlightClient } from "./flight";

afterEach(() => {
  jest.restoreAllMocks();
});

describe("FlightClient", () => {
  test("uses insecure channel credentials by default", () => {
    const createSsl = jest.spyOn(credentials, "createSsl");
    const createInsecure = jest.spyOn(credentials, "createInsecure");

    new FlightClient("localhost:31337");

    expect(createInsecure).toHaveBeenCalledTimes(1);
    expect(createSsl).not.toHaveBeenCalled();
  });

  test("uses TLS channel credentials when insecure is false", () => {
    const createSsl = jest.spyOn(credentials, "createSsl");
    const createInsecure = jest.spyOn(credentials, "createInsecure");

    new FlightClient("db.example:443", false);

    expect(createSsl).toHaveBeenCalledTimes(1);
    expect(createInsecure).not.toHaveBeenCalled();
  });
});
