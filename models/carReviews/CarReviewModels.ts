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
export interface CarReviewFilterParams {
  search: string | null;
  brandSlug: string | null;
  orderBy: CarReviewFilterOrderBy | null;
  pageId: number;
  take: number;
}
export interface CarReviewFilterResult {
  brandName: string;
  data: CarReviewFilterData[] | undefined;
  entityCount: number;
  currentPage: number;
  pageCount: number;
  startPage: number;
  endPage: number;
  take: number;
}
export enum CarReviewFilterOrderBy {
  visit = "visit",
  creationDate = "creationDate",
}
//#endregion
export interface CarReviewDto {
  id: string;
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
