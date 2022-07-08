import { FilterResult, IApiResponse } from "~~/models/IApiResponse";
import { NewsDto } from "~~/models/news/NewsDto";
import {
  NewsFilterData,
  NewsFilterParams,
} from "~~/models/news/NewsFilterData";
import { FetchApi } from "~~/utilities/customFetchApi";

export const GetByFilter = (
  filterParams: NewsFilterParams
): Promise<IApiResponse<FilterResult<NewsFilterData>>> => {
  return FetchApi("/news", {
    params: {
      search: filterParams.search,
      newsType: filterParams.newsType,
      pageId: filterParams.pageId,
      take: filterParams.take,
    },
  });
};
export const GetBySlug = (slug: string): Promise<IApiResponse<NewsDto>> => {
  return FetchApi(`/news/${slug}`);
};
