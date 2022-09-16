import { FullEditAdvertisementCommand } from "~~/models/advertisements/Advertisement.Commands";
import {
  AdvertisementDto,
  AdvertisementFilterData,
} from "~~/models/advertisements/Advertisement.Models";
import { AdvertisementFilterOrderBy } from "~~/models/advertisements/enums/AdvertisementFilterOrderBy";
import { AdvertisementStatus } from "~~/models/advertisements/enums/AdvertisementStatus";
import {
  AddConsultantCommand,
  ConsultantDto,
} from "~~/models/exhibitions/Exhibition.Commands";
import { FilterResult, IApiResponse } from "~~/models/IApiResponse";
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

export const UseConsultantNardeban = (
  advertId: string
): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/consultant/useNardeban`, {
    method: "Post",
    params: { advertId },
  });
};

export const DeleteAdvert = (
  advertId: string
): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/consultant/Advertisement/${advertId}`, {
    method: "DELETE",
  });
};
export const CreateConsultAdvert = (
  command: FormData
): Promise<IApiResponse<string>> => {
  return FetchApi(`/consultant/Advertisement`, {
    method: "Post",
    body: command,
  });
};

export const GetConsultAdvertisements = (
  pageId: number = 1,
  take: number = 12,
  orderBy: AdvertisementFilterOrderBy = AdvertisementFilterOrderBy.latest
): Promise<IApiResponse<FilterResult<AdvertisementFilterData>>> => {
  return FetchApi(`/consultant/Advertisement`, {
    params: {
      pageId,
      take,
      orderBy,
      ShowInActiveAdverts: false,
    },
  });
};
export const GetConsultAdvertById = (
  id: string
): Promise<IApiResponse<AdvertisementDto>> => {
  return FetchApi(`/consultant/advertisement/getById/${id}`);
};
export const GetConsultParkingData = (): Promise<
  IApiResponse<AdvertisementFilterData[]>
> => {
  return FetchApi(`/consultant/advertisement/GetInActive`);
};

export const EditConsultantAdvertisement = (
  command: FullEditAdvertisementCommand
): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/consultant/advertisement/FullEdit`, {
    method: "PUT",
    body: command,
  });
};
