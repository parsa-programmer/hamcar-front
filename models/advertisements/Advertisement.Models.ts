import { FilterParams } from "../IApiResponse";
import { BodyType } from "./enums/BodyType";
import { GearBox } from "./enums/GearBox";
import { AdvertisementType } from "./enums/AdvertisementType";
import { Country } from "../utilities/Country";
import { SpecialCases } from "./enums/SpecialCases";
import { Manufacture } from "./enums/Manufacture";
import { Differential } from "./enums/Differential";
import { EngineVolume } from "./enums/EngineVolume";
import { CylinderCount } from "./enums/CylinderCount";
import { ModelCarType } from "./enums/ModelCarType";
import { CarFuel } from "./enums/CarFuel";
import { AdvertisementPrice } from "./valueObjects/AdvertisementPrice";
import { Address } from "../utilities/Address";
import { CarAdvertisementDetail } from "./valueObjects/CarAdvertisementDetail";
import { MotorCycleAdvertisementDetail } from "./valueObjects/MotorCycleAdvertisementDetail";
import { Model } from "../utilities/Model";
import { Brand } from "../utilities/Brand";
import { Year } from "../utilities/Year";
import { Trim } from "../utilities/Trim";
import { UserDto } from "../account/account.Models";
import { ExhibitionDto } from "../exhibitions/Exhibition.Models";

export interface AdvertisementFilterData {
  id: string;
  creationDate: Date;
  title: string;
  mileage: number;
  year: string;
  shortLink: string;
  imageName: string;
  province: string;
  city: string;
  gearBox: string;
  imageCount: number;
  isExhibition: boolean;
  status: string;
  price: AdvertisementPrice;
}
export interface AdvertisementFilterParams extends FilterParams {
  brandId: string | null;
  modelId: string | null;
  yearId: string | null;
  search: string | null;
  province: string | null;
  city: string | null;
  exhibitionTitle: string | null;
  startMileage: number;
  endMileage: number;
  startPrice: number;
  endPrice: number;
  haveImage: boolean | null;
  havePrice: boolean | null;
  isPersonalAdvertisement: boolean | null;
  gearBox: GearBox | null;
  modelType: BodyType | null;
  advertisementType: AdvertisementType | null;
  fuel: CarFuel | null;
  carType: ModelCarType | null;
  cylinderCount: CylinderCount | null;
  differential: Differential | null;
  engineVolume: EngineVolume | null;
  manufacture: Manufacture | null;
  specialCases: SpecialCases | null;
  bodyType: BodyType | null;
  country: Country | null;
}
export interface AdvertisementImageDto {
  imageName: string;
  isMainImage: boolean;
}
export interface AdvertisementDto {
  id: string;
  creationDate: Date;
  userId: string;
  brandId: string;
  modelId: string;
  yearId: string;
  trimId: string;
  description: string;
  mileage: number;
  gearBox: string;
  shortLink: string;
  address: Address;
  price: AdvertisementPrice;
  carDetail: CarAdvertisementDetail;
  motorCycleDetail: MotorCycleAdvertisementDetail;
  images: AdvertisementImageDto[];
  userDto: UserDto;
  model: Model;
  brand: Brand;
  year: Year;
  trim: Trim;
  exhibition: ExhibitionDto;
}
