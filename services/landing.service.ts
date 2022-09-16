import { ChassisLandingDto } from "~~/models/ChassisLandingDto";
import { IApiResponse } from "~~/models/IApiResponse";
import { FetchApi } from "~~/utilities/customFetchApi";

export const GetChassis = (): Promise<IApiResponse<ChassisLandingDto[]>> => {
  return FetchApi("/landing/chassis");
};
