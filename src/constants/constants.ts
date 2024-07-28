import Constant from "../types/Constant.ts";

const API_CONSTANTS: Constant = {
  API_URI: "https://bucket-assignment-vercel.vercel.app/api",
  API_LENGTH: "12",
  API_CATEGORY: "25",
};

const RESPONSE_CONSTANTS: Constant = {
  SUCCESS: "Success",
  SUCCESS_STATUS: "200",
};

const ERROR_CONSTANTS: { [key: string]: Constant } = {
  SERVER_ERROR: {
    STATUS: "500",
    MESSAGE: "네트워크 통신이 원활하지 않습니다.",
  },
  CLIENT_ERROR: {
    STATUS: "400",
    MESSAGE: "올바르지않은 요청 입니다.",
  },
};

export { API_CONSTANTS, RESPONSE_CONSTANTS, ERROR_CONSTANTS };
