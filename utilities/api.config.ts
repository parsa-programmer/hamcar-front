let developmentUrl: string = "http://localhost:3000/api/v1";
let productionUrl: string = "http://test13.ir/api/v1";
export const isProd = process.env.NODE_ENV === "production";
export const CurrentDomainUrl = isProd
  ? "https://hamcar.ir"
  : "http://localhost:3000";

export const BASE_URL: string = isProd ? productionUrl : developmentUrl;

export const CLIENT_ID = "testclientfront";
export const CLIENT_SECRET = "ghgkhgh@bfb,fbfgfgasd";

export const PROXY_CONFIG = isProd
  ? {
      "/api": "http://test13.ir/",
    }
  : {
      //"/api": "http://localhost:5000/",
      "/api": "http://test13.ir/",
    };
