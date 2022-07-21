import { defineStore } from "pinia";
import { LoginResultDto } from "~~/models/auth/LoginResultDto";
import { GetCurrenctUser } from "~/services/account.service";
import { UserDto } from "~~/models/account/account.Models";
import { use } from "h3";

const defaultState = () => ({
  refreshToken: "",
  accessToken: "",
  isRefreshing: false,
  isRefreshSuccess: false,
  phoneNumber: "",
  user: {} as UserDto,
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
        GetCurrenctUser().then((res) => {
          this.user = res.data!;
        });
      }
    },
  },
});
