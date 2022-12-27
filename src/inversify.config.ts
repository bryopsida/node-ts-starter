import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { Echo, IEcho } from "./services/echo";
import { IEchoConfig } from "./models/echoConfig";
import config from "config";

const appContainer = new Container();
appContainer.bind<IEcho>(TYPES.Services.Echo).to(Echo);
appContainer
  .bind<IEchoConfig>(TYPES.ECHO.Config)
  .toConstantValue(config.get<IEchoConfig>("echo"));

export { appContainer };
