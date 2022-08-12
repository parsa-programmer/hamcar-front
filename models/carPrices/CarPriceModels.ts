import { Brand } from "../utilities/Brand";
import { Model } from "../utilities/Model";
import { Trim } from "../utilities/Trim";

export interface CarPriceMainPage {
  carPriceBrand: Brand;
  details: CarPriceDetail[];
}

export interface CarPriceDetail {
  carPriceSlug: string;
  carPriceModel: Model;
  trim: Trim;
  lastPrice: number;
  year: number;
  builderOrSeller: string;
  priceType: string;
  dateTime:Date;
  prices: number[];

}
export interface CarPrice {
  id: string;
  slug: string;
  title: string;
  brand: Brand;
  model: Model;
  trim: Trim;
  lastUpdate: Date;
  details: {
    year: number;
    builderOrSeller: string;
    price: number;
    priceType: string;
    date: Date;
    growPercentage:number;
  }[];
  chartData: CarPriceChartData[];
}
export interface CarPriceChartData {
  year: string;
  details: {
    price: number | null;
    date: Date;
  }[];
}
