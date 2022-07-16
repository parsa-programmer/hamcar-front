import {
  CarReviewMainPageDto,
  CarReviewMainPageData,
  CarReviewDto,
  CarReviewFilterParams,
  CarReviewFilterData,
} from "~~/models/carReviews/CarReviewModels";
import { Specification } from "~~/models/carReviews/Specification";
import { FilterResult, IApiResponse } from "~~/models/IApiResponse";
import { FetchApi } from "~~/utilities/customFetchApi";

export const GetMainPageData = (): Promise<
  IApiResponse<CarReviewMainPageDto>
> => {
  return FetchApi("/carReview");
};

export const GetBySlug = (
  slug: string
): Promise<IApiResponse<CarReviewDto>> => {
  return FetchApi(`/carReview/GetBySlug/${slug}`);
};

export const GetByFilter = (
  filterParams: CarReviewFilterParams
): Promise<IApiResponse<FilterResult<CarReviewFilterData>>> => {
  return FetchApi("/carReview/filter", {
    params: filterParams,
  });
};

export const GetSpecifications = (): Promise<IApiResponse<Specification[]>> => {
  return FetchApi("/carReview/specifications");
};
export const GetRelatedCars = (): Promise<IApiResponse<CarReviewFilterData[]>> => {
  return FetchApi("/carReview/RelatedCars");
};