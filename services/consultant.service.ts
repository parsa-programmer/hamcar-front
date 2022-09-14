import {
  AddConsultantCommand,
  ConsultantDto,
} from "~~/models/exhibitions/Exhibition.Commands";
import { IApiResponse } from "~~/models/IApiResponse";
import { FetchApi } from "~~/utilities/customFetchApi";

export const GetCurrentConsultant = (): Promise<
  IApiResponse<ConsultantDto>
> => {
  return FetchApi("/consultant", {}, { ignoreErrors: true });
};

export const GetConsultantById = (
  id: string
): Promise<IApiResponse<ConsultantDto>> => {
  return FetchApi("/consultant/" + id);
};

export const DeleteAdvert = (
  advertId: string
): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/consultant/advertisement/${advertId}`, {
    method: "DELETE",
  });
};
export const UseNardeban = (
  advertId: string
): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/consultant/useNardeban`, {
    method: "Post",
    params: { advertId },
  });
};

export const CreateAdvert = (
  command: FormData
): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/consultant/advertisemen`, {
    method: "Post",
    body: command,
  });
};
