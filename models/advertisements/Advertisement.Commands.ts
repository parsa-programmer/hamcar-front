import { Address } from "../utilities/Address";
import { CarType } from "./enums/CarType";
import { GearBox } from "./enums/GearBox";
import { MotorType } from "./enums/MotorType";
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
  price: EditAdvertisementPrice;
  carType: CarType | null;
  motorType: MotorType | null;
}
export interface EditAdvertisementPrice {
  advertisementPaymentType: string;
  staticAmount: number;
  tedadeGhestHa: number;
  pishPardakht: number;
  ghestiPaymentType: string;
  amountPricePerGhest: number;
  deliveryDate: number;
}
export interface FullEditAdvertisementCommand {
  advertisementId: string;
  brandId: string;
  modelId: string;
  yearId: string;
  trimId: string | null;
  description: string;
  mileage: number;
  gearBox: string;
  address: Address;
  price: EditAdvertisementPrice;
  carType: CarType | null;
  motorType: MotorType | null;
  carDetail: CarAdvertisementDetail | null;
  motorDetail: MotorCycleAdvertisementDetail | null;
}
