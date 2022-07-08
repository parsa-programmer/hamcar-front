import { ApiStatusCodes } from "./advertisements/enums/ApiStatusCodes";

export interface IApiResponse<T> {
  isSuccess: boolean;
  data: T | undefined;
  metaData: ResponseMetaData;
}
export interface ResponseMetaData {
  message: string;
  appStatusCode: ApiStatusCodes;
}
export interface FilterResult<T> {
  data: T[] | undefined;
  entityCount:number;
  currentPage:number;
  pageCount:number;
  startPage:number;
  endPage:number;
  take:number
}
export interface FilterParams{
  pageId:number;
  take:number;
}