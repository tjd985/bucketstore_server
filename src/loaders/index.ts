import { Express } from "express";
import expressLoader from "./express.ts";
import errorLoader from "./error.ts";

async function appLoader(app: Express) {
  await expressLoader(app);
  await errorLoader(app);
}

export default appLoader;
