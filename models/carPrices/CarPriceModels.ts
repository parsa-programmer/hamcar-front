import { Brand } from "../utilities/Brand";
import { Model } from "../utilities/Model";
import { Trim } from "../utilities/Trim";

export interface CarPriceMainPage {
  brand: Brand;
  details: CarPriceDetail[];
  chartData: CarPriceChartData[];
}
export interface CarPriceChartData {
  detailId: string;
  price: number;
  date: Date;
}
export interface CarPriceDetail {
  slug: string;
  Model: Model;
  trim: Trim;
  lastPrice: number;
  year: number;
  builderOrSeller: string;
  priceType: string;
  prices: number[];
}
export interface CarPrice {
  id: string;
  slug: string;
  Model: Model;
  trim: Trim;
  details: {
    year: number;
    builderOrSeller: string;
    price: number;
    priceType: string;
    date: Date;
  };
}
