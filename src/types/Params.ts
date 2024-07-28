import { API_CONSTANTS } from "../constants/constants.ts";

const { API_CATEGORY, API_LENGTH } = API_CONSTANTS;

type ProductsType =
  | "newest"
  | "low_price"
  | "high_price"
  | "high_discount_rate"
  | "best";

type Params = {
  length: typeof API_LENGTH;
  category: typeof API_CATEGORY;
  type: ProductsType;
  page: string;
};

type RequestParams = {
  type?: ProductsType;
  page: string;
};

export { Params, ProductsType, RequestParams };
