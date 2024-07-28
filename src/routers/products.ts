import express from "express";

import getProducts from "../controllers/productsController.ts";

const productsRouter = express.Router();

productsRouter.get("/type/:typeString/page/:pageNumber", getProducts);

export default productsRouter;
