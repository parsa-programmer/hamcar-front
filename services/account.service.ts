import exp from "constants";
import { SetNoteCommand } from "~~/models/account/account.Commands";
import {
  UserAdvertisementSavedDto,
  UserDto,
  UserNoteFilterData,
} from "~~/models/account/account.Models";
import {
  FilterParams,
  FilterResult,
  IApiResponse,
} from "~~/models/IApiResponse";
import { Address } from "~~/models/utilities/Address";
import { FetchApi } from "~~/utilities/customFetchApi";

//#region Queries
export const GetCurrenctUser = (): Promise<IApiResponse<UserDto>> => {
  return FetchApi("/account");
};

export const GetAccessNotifyCount = (): Promise<IApiResponse<number>> => {
  return FetchApi("/account/notifyAccessCount");
};

export const GetNardebanCount = (): Promise<IApiResponse<number>> => {
  return FetchApi("/account/nardebans");
};

export const GetNotes = (
  filterParams: FilterParams
): Promise<IApiResponse<FilterResult<UserNoteFilterData>>> => {
  return FetchApi("/account/notes", {
    params: filterParams,
  });
};

export const GetSavedAdvertisements = (): Promise<
  IApiResponse<UserAdvertisementSavedDto[]>
> => {
  return FetchApi("/account/saved");
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