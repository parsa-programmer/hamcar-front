import {
  AddConsultantCommand,
  ConsultantDto,
} from "~~/models/exhibitions/Exhibition.Commands";
import { IApiResponse } from "~~/models/IApiResponse";
import { FetchApi } from "~~/utilities/customFetchApi";

export const GetCurrentConsultant = (): Promise<
  IApiResponse<ConsultantDto>
> => {
  return FetchApi("/consultant");
};

export const GetConsultantById = (
  id: string
): Promise<IApiResponse<ConsultantDto>> => {
  return FetchApi("/consultant/" + id);
};
