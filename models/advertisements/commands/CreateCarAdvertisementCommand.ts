import { Address } from "~~/models/utilities/Address";
import { AdvertisementPrice } from "../AdvertisementPrice";
import { CarAdvertisementDetail } from "../CarAdvertisementDetail";
import { GearBox } from "../enums/GearBox";

export class CreateCarAdvertisementCommand {
  constructor(
    public BrandId: string,
    public ModelId: string,
    public YearId: string,
    public TrimId: string,
    public Description: string,
    public Mileage: number,
    public GearBox: GearBox,
    public Address: Address,
    public Price: AdvertisementPrice,
    public CarDetail: CarAdvertisementDetail
  ) {}
}
