import express, { Express } from "express";
import cors from "cors";

async function expressLoader(app: Express) {
  app.use(
    cors({
      origin: "*",
      methods: "GET, POST",
      credentials: true,
      optionsSuccessStatus: 204,
    }),
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
}

export default expressLoader;
