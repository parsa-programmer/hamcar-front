import { FetchError, FetchOptions } from "ohmyfetch";
//import { useAuthStore } from "../auth/Auth.store"
import { BASE_URL } from "./api.config";
import FetchCustomConfig from "./FetchCustomConfig";
import { IApiResponse } from "~~/models/IApiResponse";
import { ApiStatusCodes } from "~~/models/advertisements/enums/ApiStatusCodes";
import { ToastType } from "~~/composables/useToast";
import { authStore } from "~~/stores/auth.store";

export async function FetchApi<T>(
  url: string,
  config: FetchOptions = {},
  customConfig: FetchCustomConfig = {}
): Promise<IApiResponse<T>> {
  config = { baseURL: BASE_URL, ...config };
  const store = authStore();

  if (!config.headers) {
    config.headers = {};
  }

  if (store.accessToken) {
    // @ts-ignore: Unreachable code erro
    config.headers["Authorization"] = `Bearer ${store.accessToken}`;
  }

  return $fetch<IApiResponse<T>>(url, config)
    .then((response) => {
      if (response.isSuccess == false) {
        showError(response);
      }
      return response;
    })
    .catch((e: FetchError) => {
      customConfig.onError?.(e);
      if (e.response?.status == 401) {
        showError({
          isSuccess: false,
          data: undefined,
          metaData: {
            message: "دسترسی غیر مجاز",
            appStatusCode: ApiStatusCodes.UnAuthorize,
          },
        });
      }
      if (e.response?._data == undefined) {
        showError({
          data: undefined,
          isSuccess: false,
          metaData: {
            message: "ارتباط با سرور برقرار نشد",
            appStatusCode: ApiStatusCodes.ServerError,
          },
        });
      }
      return {
        data: undefined,
        isSuccess: false,
        metaData: {
          message: e.response?._data?.metaData?.message,
          appStatusCode: e.response?._data?.metaData?.appStatusCode,
        },
      };
    });
}
function showError(result: IApiResponse<any>) {
  const { showToast } = useToast();
  showToast(result.metaData.message, ToastType.error, 3000);
}
