import { Plan } from "../account/account.Models";
import { Address } from "../utilities/Address";

export interface ExhibitionDto {
  id: string;
  creationDate: Date;
  ownerUserId: string;
  title: string;
  address: Address;
  postalCode: string;
  logoImageName: string;
  englishTitle: string;
  status: string;
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
