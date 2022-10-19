import { FilterParams, FilterResult } from "../IApiResponse";
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
import { AdvertisementPlan } from "../plans/AdvertisementPlan";
import { AdvertisementPlanType } from "./enums/AdvertisementPlanType";
import { AdvertisementFilterOrderBy } from "./enums/AdvertisementFilterOrderBy";
import { Color } from "csstype";

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
  brand_Model: string;
  trim: string;
  isExhibition: boolean;
  status: string;
  price: AdvertisementPrice;
  isCar: boolean;
  visit: number;
  plan: string;

  //Just For Parking
  inActiveDate: Date;
}
export interface AdvertisementFilterResult {
  filterResult: FilterResult<AdvertisementFilterData>;
  breadcrumb: BreadCrumb[];
  title: string;
}
export interface BreadCrumb {
  title: string;
  url: string;
}
export interface AdvertisementFilterParams extends FilterParams {
  brand: string[] | null;
  model: string[] | null;
  year: string | null;
  trim: string | null;
  search: string | null;
  province: string[] | null;
  city: string | null;
  exhibitionTitle: string | null;
  startMileage: string | null;
  endMileage: string | null;
  startPrice: string | null;
  endPrice: string | null;
  haveImage: boolean | null;
  havePrice: boolean | null;
  isPersonalAdvertisement: boolean | null;
  gearBox: GearBox[] | null;
  modelType: BodyType[] | null;
  advertisementType: AdvertisementType | null;
  fuel: CarFuel[] | null;
  carType: ModelCarType[] | null;
  cylinderCount: CylinderCount[] | null;
  differential: Differential[] | null;
  engineVolume: EngineVolume[] | null;
  manufacture: Manufacture[] | null;
  specialCases: SpecialCases[] | null;
  colors: Color[] | null;
  country: Country[] | null;
  startYear: string | null;
  endYear: string | null;
  orderBy: AdvertisementFilterOrderBy | null;
  justGhesti: boolean | null;
}
export interface AdvertisementImageDto {
  id: string;
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
  gearBox: GearBox;
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
  plan: AdvertPlanInfo;
  status: string;
  exhibition: AdvertExhibitionDto;
}
export interface AdvertExhibitionDto {
  id: string;
  title: string;
  address: string;
  logoImageName: string;
  englishTitle: string;
  mobilePhone: string;
  telePhone: string;
  advertCount: number;
}
export interface AdvertPlanInfo {
  planId: string;
  expireDate: Date;
  planType: AdvertisementPlanType;
}

export interface GetAdvertisementCountParams {
  model: string | null;
  modelType: BodyType | null;
  exhibitionId: string | null;
  setCurrentUserId: boolean | null;
}
export enum GetAdvertisementType {
  All = "all",
  model = "model",
  modelType = "modelType",
  exhibition = "exhibition",
}
