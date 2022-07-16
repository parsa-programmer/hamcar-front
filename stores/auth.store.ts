import { defineStore } from "pinia";
import { LoginResultDto } from "~~/models/auth/LoginResultDto";

const defaultState = () => ({
  refreshToken: "",
  accessToken: "",
  isRefreshing: false,
  isRefreshSuccess: false,
  phoneNumber: "",
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
      }
    },
  },
});
