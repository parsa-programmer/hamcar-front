import { FilterParams } from "../IApiResponse";

export interface NotifyFilterData {
  id: string;
  creationDate: Date;
  userId: string;
  title: string;
  startYear: number;
  endYear: number;
  startPrice: number;
  endPrice: number;
  brandId: string;
  modelId: string;
  trimId: string;
  advertisementType: string;
  advertisementCount: number;
}
export interface NotifyAdvertisementFilterParams extends FilterParams {
  notifyId: string;
  visited: boolean | undefined;
}
