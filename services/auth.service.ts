import { FetchApi } from "~/utilities/customFetchApi";
import { IApiResponse } from "~~/models/IApiResponse";
import { LoginResultDto } from "~~/models/auth/LoginResultDto";

export async function LoginOrRegister(
  phoneNumber: string
): Promise<IApiResponse<undefined>> {
  var res = await FetchApi<undefined>(
    `/Auth/loginOrRegister?phoneNumber=${phoneNumber}`,
    {
      method: "post",
    }
  );
  return res;
}

export async function ValidateCode(
  phoneNumber: string,
  code: string
): Promise<IApiResponse<LoginResultDto>> {
  var res = await FetchApi<LoginResultDto>(
    `/Auth/ValidateSmsCode?phoneNumber=${phoneNumber}&code=${code}`,
    {
      method: "put",
    }
  );
  return res;
}
export async function LogoutUser(): Promise<IApiResponse<undefined>> {
  var res = await FetchApi<undefined>(
    `/Auth/logout`,
    {
      method: "delete",
    }
  );
  return res;
}
