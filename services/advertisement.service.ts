import {
  EditAdvertisementCommand,
  FullEditAdvertisementCommand,
} from "~~/models/advertisements/Advertisement.Commands";
import {
  AdvertisementDto,
  AdvertisementFilterData,
  AdvertisementFilterParams,
} from "~~/models/advertisements/Advertisement.Models";
import { FilterResult, IApiResponse } from "~~/models/IApiResponse";
import { FetchApi } from "~~/utilities/customFetchApi";

export const GetByFilter = (
  filterParams: AdvertisementFilterParams
): Promise<IApiResponse<FilterResult<AdvertisementFilterData>>> => {
  return FetchApi("/advertisement", {
    params: filterParams,
  });
};

export const GetByShortLink = (
  shortLink: string
): Promise<IApiResponse<AdvertisementDto>> => {
  return FetchApi(`/advertisement/${shortLink}`);
};

export const EditAdvertisement = (
  command: EditAdvertisementCommand
): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/advertisement`, {
    method: "PUT",
    body: command,
  });
};

export const UseNardeban = (
  advertId: string
): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/advertisement/UseNardeban`, {
    method: "PUT",
    params: {
      advertId: advertId,
    },
  });
};

export const FullEditAdvertisement = (
  command: FullEditAdvertisementCommand
): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/advertisement/FullEdit`, {
    method: "PUT",
    body: command,
  });
};

export const FinallyAdvert = (
  advertId: string
): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/advertisement/Finally`, {
    method: "PUT",
    params: {
      advertisementId: advertId,
    },
  });
};

export const AddImage = (
  command: FormData
): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/advertisement/Images`, {
    method: "POST",
    body: command,
  });
};

export const DeleteImage = (
  advertId: string,
  imageId: string
): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/advertisement/Images`, {
    method: "DELETE",
    body: {
      advertisementId: advertId,
      imageId: imageId,
    },
  });
};
