import { Express } from "express";

import productsRouter from "../routers/products.ts";

async function routerLoader(app: Express) {
  app.use("/products", productsRouter);
}

export default routerLoader;
