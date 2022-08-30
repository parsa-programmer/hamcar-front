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
  function showError(result: IApiResponse<any>) {
    const toast = useToast();
    if (
      customConfig.ignoreErrors == false ||
      customConfig.ignoreErrors == undefined
    ) {
      if (process.server == false) {
        toast.showToast(result.metaData.message, ToastType.error, 3000);
      }
    }
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

      var response = {
        data: undefined,
        isSuccess: false,
        metaData: {
          message:
            e.response?._data?.MetaData?.Message ?? "مشکلی در عملیات رخ داده",
          appStatusCode: e.response?._data?.MetaData?.AppStatusCode,
        },
      };
      if (e.response?.status == 401) {
        response.metaData.appStatusCode = ApiStatusCodes.UnAuthorize;
        showError({
          isSuccess: false,
          data: undefined,
          metaData: {
            message: "دسترسی غیر مجاز",
            appStatusCode: ApiStatusCodes.UnAuthorize,
          },
        });
      } else if (e.response?.status == 400) {
        showError({
          isSuccess: false,
          data: undefined,
          metaData: {
            message: "اطلاعات نامعتبر است",
            appStatusCode: ApiStatusCodes.BadRequest,
          },
        });
      } else if (e.response?.status == 429) {
        showError({
          isSuccess: false,
          data: undefined,
          metaData: {
            message:
              "تعداد درخواست های شما بیشتر از حد مجاز است ، چند دقیقه بعد تلاش کنید",
            appStatusCode: ApiStatusCodes.ServerError,
          },
        });
      } else if (e.response?._data == undefined) {
        showError({
          data: undefined,
          isSuccess: false,
          metaData: {
            message: "ارتباط با سرور برقرار نشد",
            appStatusCode: ApiStatusCodes.ServerError,
          },
        });
      } else {
        showError(response);
      }

      return response;
    });
}
