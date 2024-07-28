import express, { Express } from "express";
import appLoader from "./src/loaders/index.ts";

const app: Express = express();

(async () => {
  await appLoader(app);
})();

export default app;
