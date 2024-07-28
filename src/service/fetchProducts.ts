import { API_CONSTANTS } from "../constants/constants.ts";
import { Params, RequestParams } from "../types/Params.ts";

const { API_URI, API_CATEGORY, API_LENGTH } = API_CONSTANTS;

async function fetchProducts({ type = "newest", page }: RequestParams) {
  const params: Params = {
    length: API_LENGTH,
    category: API_CATEGORY,
    type,
    page,
  };
  const queryString = new URLSearchParams(params).toString();

  const response = await fetch(`${API_URI}?${queryString}`);
  const result = await response.json();

  if (result.status !== 200) {
    throw new Error();
  }

  return result.data;
}

export default fetchProducts;
