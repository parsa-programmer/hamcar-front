import { AdvertisementPrice } from "../advertisements/AdvertisementPrice";
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
export interface UserNoteFilterData{
    id: string;
    creationDate: Date;
    text: string;
    advertisementTitle: string;
    gearBox: string;
    imageName: string;
    year: string;
    mileage: number;
    shortLink: string;
}

export interface UserAdvertisementSavedDto{
    id: string;
    creationDate: Date;
    userId: string;
    advertisementId: string;
    advertisementTitle: string;
    year: string;
    mileage: number;
    imageName: string;
    shortLink: string;
    price: AdvertisementPrice;
}