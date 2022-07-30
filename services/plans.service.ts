import { Plan } from "~~/models/account/account.Models";
import { AdvertisementPlan } from "~~/models/plans/AdvertisementPlan";
import { IApiResponse } from "~~/models/IApiResponse";
import { FetchApi } from "~~/utilities/customFetchApi";


export const GetAdvertisementPlans = ():Promise<IApiResponse<AdvertisementPlan[]>> => {
  return FetchApi("/plans/advertisement");
};
