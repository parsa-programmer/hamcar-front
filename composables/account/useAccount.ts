import {
  DeleteNote,
  DeleteSavedItem,
  EditProfile,
  GetAccessNotifyCount,
  GetCurrenctUser,
  GetNardebanCount,
  GetNotes,
  GetSavedAdvertisements,
  SaveAdvertisement,
  SetAddress,
  SetNote,
} from "~/services/account.service";
import { UserDto } from "~~/models/account/account.Models";
import { IApiResponse } from "~~/models/IApiResponse";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

export const useAccount = () => {
  const isLoading = ref(false);

  const getCurrentUser = async (): Promise<UserDto | undefined> => {
    var result = await ProssesAsync<IApiResponse<UserDto>>(
      GetCurrenctUser,
      isLoading
    );
    return result.data;
  };
  return { isLoading, getCurrentUser };
};
