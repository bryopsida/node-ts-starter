import { Container } from "inversify";
import { TYPES } from "./types";
import { IEcho } from "./services/echo";

export default async function main(
  appContainer: Container,
  message: string
): Promise<string> {
  const echoService = appContainer.get<IEcho>(TYPES.Services.Echo);
  return echoService.echo(message);
}

if (require.main === module) {
  const appContainer = require("./inversify.config").appContainer;
  main(appContainer, "test").catch((err) => {
    console.error(`Error while running: ${err}`);
  });
}
