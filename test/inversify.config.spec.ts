import { describe, it, expect } from "@jest/globals";
import "reflect-metadata";
import { TYPES } from "../src/types";
import { appContainer } from "../src/inversify.config";
import { IEchoConfig } from "../src/models/echoConfig";

describe("inversify.config", () => {
  it("binds config", () => {
    expect(appContainer.isBound(TYPES.ECHO.Config)).toBeTruthy();
    const config = appContainer.get<IEchoConfig>(TYPES.ECHO.Config);
    expect(config).toBeDefined();
    expect(config.delay).toEqual(1000);
  });
  it("binds echo service", () => {
    expect(appContainer.isBound(TYPES.Services.Echo)).toBeTruthy();
  });
});
