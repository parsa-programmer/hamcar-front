import { FilterParams } from "../IApiResponse";
import { Brand } from "../utilities/Brand";
import { Model } from "../utilities/Model";
import { SeoData } from "../utilities/SeoData";
import { Trim } from "../utilities/Trim";
import { Specification, PercentageSpecification } from "./Specification";

//#region MainPage
export interface CarReviewMainPageDto {
  brands: Brand[];
  topVisitReviews: CarReviewFilterData[];
  carReviews: CarReviewMainPageData[];
}
export interface CarReviewMainPageData {
  brand: Brand;
  carReviews: CarReviewFilterData[];
}
//#endregion

//#region FilterData
export interface CarReviewFilterData {
  id: string;
  creationDate: Date;
  slug: string;
  imageName: string;
  model: string;
  brand: string;
  year: string;
  trim: string;
  brandSlug: string;
}
export interface CarReviewFilterParams extends FilterParams {
  search: string | null;
  brandSlug: string | null;
  orderBy: CarReviewFilterOrderBy | null;
}
export enum CarReviewFilterOrderBy {
  visit = "visit",
  creationDate = "creationDate",
}
//#endregion
export interface CarReviewDto {
  slug: string;
  year: number;
  description: string;
  mainImageName: string;
  advantages: string;
  disadvantages: string;
  seoData: SeoData;
  carReviewBrand: Brand;
  carReviewModel: Model;
  trim: Trim;
  images: string[];
  specifications: Specification[];
  percentageSpecifications: PercentageSpecification[];
}
