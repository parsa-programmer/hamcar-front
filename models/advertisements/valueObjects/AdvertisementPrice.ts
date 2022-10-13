import { AdvertisementPaymentType } from "../enums/AdvertisementPaymentType";
import { Ghesti } from "./Ghesti";

export interface AdvertisementPrice {
  advertisementPaymentType: AdvertisementPaymentType;
  amount: number;
  ghest: Ghesti | null;
}
