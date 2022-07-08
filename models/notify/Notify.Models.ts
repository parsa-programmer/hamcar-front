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
export interface NotifyAdvertisementFilterData {
  id: string;
  creationDate: Date;
  brandId: string;
  modelId: string;
  trimId: string;
  brandTitle: string;
  modelTitle: string;
  trimTitle: string;
  shortLink: string;
  address: string;
  mileage: number;
  price: number;
  year: string;
}
export interface NotifyAdvertisementFilterParams extends FilterParams {
  notifyId: string;
  isVisited: boolean | undefined;
}
