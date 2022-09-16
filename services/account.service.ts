import { SetNoteCommand } from "~~/models/account/account.Commands";
import {
  NardebanDto,
  UserAdvertisementSavedDto,
  UserDto,
  UserNoteFilterData,
} from "~~/models/account/account.Models";
import {
  AdvertisementFilterData,
  AdvertisementFilterResult,
} from "~~/models/advertisements/Advertisement.Models";
import { AdvertisementFilterOrderBy } from "~~/models/advertisements/enums/AdvertisementFilterOrderBy";
import {
  FilterParams,
  FilterResult,
  IApiResponse,
} from "~~/models/IApiResponse";
import { Address } from "~~/models/utilities/Address";
import { BASE_URL } from "~~/utilities/api.config";
import { FetchApi } from "~~/utilities/customFetchApi";

//#region Queries
export const GetCurrenctUser = (): Promise<IApiResponse<UserDto>> => {
  return FetchApi("/account", {}, { ignoreErrors: true });
};


export const GetNardebanCount = (): Promise<IApiResponse<number>> => {
  return FetchApi("/account/nardebans", {}, { ignoreErrors: true });
};
export const GetNardebanHistory = (
  take: Number = 20
): Promise<IApiResponse<NardebanDto[]>> => {
  return FetchApi("/account/nardebans/Byfilter", {
    params: {
      take,
    },
  });
};
export const GetNotes = (
  filterParams: FilterParams
): Promise<IApiResponse<FilterResult<UserNoteFilterData>>> => {
  return FetchApi("/account/notes", {
    params: filterParams,
  });
};
export const GetNoteByAdvertId = (
  advertId: string
): Promise<IApiResponse<UserNoteFilterData>> => {
  return FetchApi("/account/notes/" + advertId, {}, { ignoreErrors: true });
};
export const GetSavedAdvertisements = (): Promise<
  IApiResponse<UserAdvertisementSavedDto[]>
> => {
  return FetchApi(
    "/account/saved",
    {},
    {
      ignoreErrors: true,
    }
  );
};

//#endregion

export const SetAddress = (
  address: Address
): Promise<IApiResponse<undefined>> => {
  return FetchApi("/account", {
    method: "post",
    body: address,
  });
};

export const EditProfile = (
  command: FormData
): Promise<IApiResponse<undefined>> => {
  return FetchApi("/account", {
    body: command,
    method: "put",
  });
};

export const SetNote = (
  command: SetNoteCommand
): Promise<IApiResponse<undefined>> => {
  return FetchApi("/account/notes", {
    method: "post",
    body: command,
  });
};

export const DeleteNote = (id: string): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/account/notes/${id}`, {
    method: "delete",
  });
};

export const DeleteAllNote = (): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/account/notes`, {
    method: "delete",
  });
};

export const SaveAdvertisement = (
  advertId: string
): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/account/saved/${advertId}`, {
    method: "post",
  });
};

export const DeleteSavedItem = (
  id: string
): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/account/saved/${id}`, {
    method: "delete",
  });
};

export const DeleteAllSavedItem = (
  id: string
): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/account/saved`, {
    method: "delete",
  });
};

export const GetUserAdvertisements = (
  pageId: number = 1,
  take: number = 12,
  orderBy: AdvertisementFilterOrderBy = AdvertisementFilterOrderBy.latest
): Promise<IApiResponse<FilterResult<AdvertisementFilterData>>> => {
  return FetchApi(`/account/adverts`, {
    params: {
      pageId,
      take,
      orderBy,
      ShowInActiveAdverts: false,
    },
  });
};
