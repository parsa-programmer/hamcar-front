import { SeoData } from "../utilities/SeoData";

export interface NewsDto {
  id: string;
  title: string;
  description: string;
  writer: string;
  slug: string;
  imageName: string;
  seoData: SeoData;
  newsType: NewsType;
  creationDate:Date
}

export enum NewsType {
  car = "car",
  motorcycle = "motorcycle",
}
