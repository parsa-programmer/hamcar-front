import { defineStore } from "pinia";
import { LoginResultDto } from "~~/models/auth/LoginResultDto";
import {
  GetCurrenctUser,
  GetSavedAdvertisements,
} from "~/services/account.service";
import {
  UserAdvertisementSavedDto,
  UserDto,
} from "~~/models/account/account.Models";
import { use } from "h3";
import { useAuth } from "~~/composables/auth/useAuth";
import { ApiStatusCodes } from "~~/models/advertisements/enums/ApiStatusCodes";

const defaultState = () => ({
  refreshToken: "",
  accessToken: "",
  isRefreshing: false,
  isRefreshSuccess: false,
  phoneNumber: "",
  loading: false,
  user: {} as UserDto,
  advertSaved: [] as UserAdvertisementSavedDto[],
});

export const authStore = defineStore("auth", {
  state: defaultState,
  getters: {
    isLogin(): boolean {
      return this.accessToken !== "";
    },
  },
  actions: {
    setLoginData(loginResult: LoginResultDto) {
      this.accessToken = loginResult.token;
      this.refreshToken = loginResult.refreshToken;
    },
    setPhoneNumber(phneNumber: string) {
      this.phoneNumber = phneNumber;
    },
    initData() {
      if (localStorage.getItem("auth-data")) {
        const data = localStorage.getItem("auth-data");
        this.setLoginData(JSON.parse(data!));
        this.loading = true;
        GetCurrenctUser()
          .then((res) => {
            if (res.metaData.appStatusCode === ApiStatusCodes.UnAuthorize) {
              this.logout();
              return;
            }
            this.user = res.data!;
            GetSavedAdvertisements().then((res) => {
              if (res.isSuccess) {
                this.advertSaved = res.data!;
              }
            });
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    async logout() {
      const auth = useAuth();
      await auth.logout();
      this.accessToken = "";
      this.refreshToken = "";
    },
  },
});
