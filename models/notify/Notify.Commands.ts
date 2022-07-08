import { AdvertisementType } from "../advertisements/enums/AdvertisementStatus";

export class CreateNotifyCommand {
  constructor(
    public advertisementType: AdvertisementType,
    public brandId: string,
    public modelId: string,
    public trimId: string,
    public modelTitle: string,
    public brandTitle: string,
    public trimTitle: string,
    public startYear: number,
    public endYear: number,
    public startPrice: number,
    public endPrice: number
  ) {}
}
