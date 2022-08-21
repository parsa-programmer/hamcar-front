import { CarPrice } from "../carPrices/CarPriceModels";
import { AdvertisementPrice } from "./valueObjects/AdvertisementPrice";

export interface AdvertisementCard {
  id: string;
  creationDate: Date;
  title: string;
  mileage: number;
  year: string;
  shortLink: string;
  imageName: string;
  province: string;
  city: string;
  brand_Model: string;
  trim: string;
  gearBox: string;
  imageCount: number;
  isExhibition: boolean;
  price: AdvertisementPrice;
}
