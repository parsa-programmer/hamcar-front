import { defineStore } from "pinia";
import { LoginResultDto } from "~~/models/auth/LoginResultDto";

const defaultState = () => ({
  refreshToken: "",
  accessToken: "",
  isRefreshing: false,
  isRefreshSuccess: false,
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
  },
});
