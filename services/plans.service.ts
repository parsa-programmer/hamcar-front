import { Plan } from "~~/models/account/account.Models";
import { AdvertisementPlan, AdvertismeentPlansResult } from "~~/models/plans/AdvertisementPlan";
import { IApiResponse } from "~~/models/IApiResponse";
import { FetchApi } from "~~/utilities/customFetchApi";


export const GetAdvertisementPlans = ():Promise<IApiResponse<AdvertismeentPlansResult>> => {
  return FetchApi("/plans/advertisement");
};
