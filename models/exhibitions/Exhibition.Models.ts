import { NullLiteral } from "@babel/types";
import { Plan } from "../account/account.Models";
import { AdvertisementFilterData } from "../advertisements/Advertisement.Models";
import { AdvertisementCard } from "../advertisements/AdvertisementCard";
import { Manufacture } from "../advertisements/enums/Manufacture";
import { SpecialCases } from "../advertisements/enums/SpecialCases";
import { FilterParams } from "../IApiResponse";
import { Address } from "../utilities/Address";

export enum ExhibitionStatus {
  pending = "pending",
  rejected = "rejected",
  active = "active",
  deActive = "deActive",
  shouldCompleteAccount = "shouldCompleteAccount",
  accountEdited = "accountEdited",
}
export interface ExhibitionDto {
  id: string;
  creationDate: Date;
  ownerUserId: string;
  title: string;
  address: Address;
  postalCode: string;
  logoImageName: string;
  englishTitle: string;
  status: ExhibitionStatus;
  type: string;
  phoneNumbers: PhoneNumbers;
  plan: Plan;
  specialAdvertisementCount: number;
}
export interface PhoneNumbers {
  telephone: string;
  mobilePhone: string;
  mobilePhoneTwo: string;
  mobilePhoneTree: string;
}
export interface SingleExhiitionDto {
  id:string;
  title: string;
  address: Address;
  logoImageName: string;
  englishTitle: string;
  outerImage: string;
  advertCount: number;
  mobilePhone: string;
  telephone: string;
  latestAdverts: AdvertisementFilterData[];
}
export interface ExhibitionConsultantDto {
  id: string;
  creationDate: Date;
  role: string;
  userId: string;
  phoneNumber: string;
  fullName: string;
  activeAdvertisements: number;
  advertisementInCurrentMonth: number;
  usedNardebansInCurrentMonth: number;
}
export interface ExhibitionFilterData {
  id: string;
  creationDate: Date;
  title: string;
  logoImageName: string;
  englishTitle: string;
  status: string;
  type: string;
  advertCount: number;
  address: string;
  telePhone: string;
  phoneNumber: string;
}
export interface ExhibitionFilterParams extends FilterParams {
  title: string | null;
  hasZeroMileageCar: boolean | string;
  province: string | null;
  specialCases: SpecialCases[] | null;
  orderBy: ExhibitionFilterOrderBy;
  manufacture: Manufacture[] | null;
}
export enum ExhibitionFilterOrderBy {
  creationDate = "creationDate",
  popular = "popular",
}
