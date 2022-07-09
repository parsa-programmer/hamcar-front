import { Address } from "../utilities/Address";
import { GearBox } from "./enums/GearBox";
import { AdvertisementPrice } from "./valueObjects/AdvertisementPrice";
import { CarAdvertisementDetail } from "./valueObjects/CarAdvertisementDetail";
import { MotorCycleAdvertisementDetail } from "./valueObjects/MotorCycleAdvertisementDetail";

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

export class CreateMotorCycleAdvertisementCommand {
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
    public MotorCycleDetail: MotorCycleAdvertisementDetail
  ) {}
}
export interface EditAdvertisementCommand {
  advertisementId: string;
  description: string;
  mileage: number;
  gearBox: string;
  address: Address;
  price: AdvertisementPrice;
}
export class FullEditAdvertisementCommand {
  constructor(
    public brandId: string,
    public modelId: string,
    public yearId: string,
    public trimId: string | null,
    public advertisementId: string,
    public description: string,
    public mileage: number,
    public gearBox: string,
    public address: Address,
    public price: AdvertisementPrice,
    public carDetail: CarAdvertisementDetail
  ) {}
}
