import { ChassisLandingDto,LandingBrandsDto } from "~~/models/LandingDto";
import { IApiResponse } from "~~/models/IApiResponse";
import { FetchApi } from "~~/utilities/customFetchApi";

export const GetChassis = (): Promise<IApiResponse<ChassisLandingDto[]>> => {
  return FetchApi("/landing/chassis");
};


export const GetLandingBrands = (): Promise<IApiResponse<LandingBrandsDto[]>> => {
  return FetchApi("/landing/brands");
};
