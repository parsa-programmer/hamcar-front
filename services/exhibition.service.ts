import { AddConsultantCommand } from "~~/models/exhibitions/Exhibition.Commands";
import {
  ExhibitionConsultantDto,
  ExhibitionDto,
  SingleExhiitionDto,
} from "~~/models/exhibitions/Exhibition.Models";
import { IApiResponse } from "~~/models/IApiResponse";
import { FetchApi } from "~~/utilities/customFetchApi";

export const Register = (
  command: FormData
): Promise<IApiResponse<undefined>> => {
  return FetchApi("/exhibition", {
    method: "POST",
    body: command,
  });
};
export const VerifyExhibitionAccount = (
  command: FormData
): Promise<IApiResponse<undefined>> => {
  return FetchApi("/exhibition/CompleteAccount", {
    method: "PUT",
    body: command,
  });
};


export const Edit = (command: FormData): Promise<IApiResponse<undefined>> => {
  return FetchApi("/exhibition", {
    method: "PUT",
    body: command,
  });
};

export const AddConsultant = (
  command: AddConsultantCommand
): Promise<IApiResponse<undefined>> => {
  return FetchApi("/exhibition/consultants", {
    method: "POST",
    body: command,
  });
};

export const GetCurrentExhibition = (): Promise<
  IApiResponse<ExhibitionDto>
> => {
  return FetchApi("/exhibition", undefined, {
    ignoreErrors: true,
  });
};

export const GetByEnglishTitle = (
  englishTitle: string
): Promise<IApiResponse<SingleExhiitionDto>> => {
  return FetchApi(`/exhibition/${englishTitle}`);
};

export const GetConsultants = (): Promise<
  IApiResponse<ExhibitionConsultantDto>
> => {
  return FetchApi("/exhibition/consultants");
};
