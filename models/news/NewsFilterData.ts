import { FilterParams } from "../IApiResponse";
import { NewsType } from "./NewsDto";

export interface NewsFilterParams extends FilterParams {
  search: string | undefined;
  newsType: NewsType;
}
export interface NewsFilterData {
  id: string;
  title: string;
  description: string;
  writer: string;
  slug: string;
  imageName: string;
  newsType: NewsType;
  creationDate:Date
}
