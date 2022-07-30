import { IApiResponse } from "~~/models/IApiResponse";
import { City, Province } from "~~/models/iranDivision/province";
import { FetchApi } from "~~/utilities/customFetchApi";

export const getProvinces = (): Promise<IApiResponse<Province[]>> => {
  return FetchApi("/iranDivision");
};
export const getCities = (
  provinceId: number
): Promise<IApiResponse<City[]>> => {
  return FetchApi(`/iranDivision/${provinceId}`);
};
