import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

import fetchProducts from "../service/fetchProducts.ts";
import { RESPONSE_CONSTANTS, ERROR_CONSTANTS } from "../constants/constants.ts";

import { ProductsType } from "../types/Params.ts";

type RequestParams = {
  typeString: ProductsType;
  pageNumber: string;
};

const { SUCCESS, SUCCESS_STATUS } = RESPONSE_CONSTANTS;
const { SERVER_ERROR } = ERROR_CONSTANTS;

async function getProducts(
  req: Request<RequestParams>,
  res: Response,
  next: NextFunction,
) {
  const { typeString, pageNumber }: RequestParams = req.params;

  try {
    const products = await fetchProducts({
      type: typeString,
      page: pageNumber,
    });

    res.status(200).json({
      result: SUCCESS,
      status: SUCCESS_STATUS,
      content: products.data,
    });
  } catch (err) {
    const customError = createHttpError(
      SERVER_ERROR.STATUS,
      SERVER_ERROR.MESSAGE,
    );

    next(customError);
  }
}

export default getProducts;
