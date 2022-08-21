import { AdvertisementCard } from "../advertisements/AdvertisementCard";
import { AdvertisementPrice } from "../advertisements/valueObjects/AdvertisementPrice";
import { Address } from "../utilities/Address";

export interface Plan {
  planId: number;
  expireDate: Date;
}

export interface Role {
  roleId: string;
  roleTitle: string;
}

export interface UserDto {
  id: string;
  creationDate: Date;
  name: string;
  family: string;
  phoneNumber: string;
  email: string;
  avatarName: string;
  isActive: boolean;
  address: Address;
  plan: Plan;
  gender: string;
  roles: Role[];
}
/////////////////////////////////////////////////
export interface UserNoteFilterData {
  id: string;
  creationDate: Date;
  text: string;
  advertisement: AdvertisementCard;
}

export interface UserAdvertisementSavedDto {
  id: string;
  creationDate: Date;
  userId: string;
  advertisementId: string;
  advertisement: AdvertisementCard;
}
