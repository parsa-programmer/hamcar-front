import { Plan } from "../account/account.Models";
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
}
export interface PhoneNumbers {
  telephone: string;
  mobilePhone: string;
  mobilePhoneTwo: string;
  mobilePhoneTree: string;
}
export interface SingleExhiitionDto {
  title: string;
  address: Address;
  postalCode: string;
  logoImageName: string;
  englishTitle: string;
  type: string;
  phoneNumbers: PhoneNumbers;
  advertisementCount: number;
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
