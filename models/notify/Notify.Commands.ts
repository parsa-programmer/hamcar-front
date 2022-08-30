import { AdvertisementType } from "../advertisements/enums/AdvertisementType";

export interface CreateNotifyCommand {
  advertisementType: AdvertisementType;
  brandId: string;
  modelId: string;
  trimId: string | null;
  modelTitle: string;
  brandTitle: string;
  trimTitle: string | null;
  startYear: number | null;
  endYear: number | null;
  startPrice: number | null;
  endPrice: number | null;
}
