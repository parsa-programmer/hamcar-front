let developmentUrl: string = "https://localhost:5001/api/v1";
let productionUrl: string = "http://test13.ir/api/v1";

export const isProd = process.env.NODE_ENV === "production";
export const BASE_URL: string = isProd ? productionUrl : developmentUrl;

export const CLIENT_ID = "testclientfront";
export const CLIENT_SECRET = "ghgkhgh@bfb,fbfgfgasd";
