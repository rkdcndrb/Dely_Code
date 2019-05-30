import dotenv from "dotenv";
dotenv.config();

import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import app from "./app";
import connectionOptions from "./ormConfig";
import getUserFromToken from "./utils/getUserFromToken";

const PORT: number | string = process.env.PORT || 4000;
const GRAPHQL_ENDPOINT: string = "/graphql";
const SUBSCRIPTIONS_ENDPOINT: string = "/subscriptions";
const PLAYGROUND_ENDPOINT: string = "/playground";

const handleAppError = (error): void => console.log(error);

const handleListening = (): void =>
  console.log(`Listening on http://localhost:${PORT}`);

const appOptions: Options = {
  port: PORT,
  subscriptions: {
    path: SUBSCRIPTIONS_ENDPOINT,
    onConnect: async connectionParams => {
      const user = await getUserFromToken(connectionParams["X-JWT"]);
      return {
        currentUser: user
      };
    }
  },
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
};

createConnection(connectionOptions)
  .then(() => {
    app.start(appOptions, handleListening);
  })
  .catch(error => console.log(error));

app.express.on("error", handleAppError);
