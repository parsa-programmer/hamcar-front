import { IApiResponse } from "~~/models/IApiResponse";
import { Brand } from "~~/models/utilities/Brand";
import { Model } from "~~/models/utilities/Model";
import { Year } from "~~/models/utilities/Year";
import { Trim } from "~~/models/utilities/Trim";
import { FetchApi } from "~~/utilities/customFetchApi";

export const GetBrands = (): Promise<IApiResponse<Brand[]>> => {
  return FetchApi("/brands/getBrands");
};
export const GetModels = (brandId: string): Promise<IApiResponse<Model[]>> => {
  return FetchApi(`/brands/getModels/${brandId}`);
};
export const GetYears = (modelId: string): Promise<IApiResponse<Year[]>> => {
  return FetchApi(`/brands/getYears/${modelId}`);
};
export const GetTrims = (yearId: string): Promise<IApiResponse<Trim[]>> => {
  return FetchApi(`/brands/getTrims/${yearId}`);
};
