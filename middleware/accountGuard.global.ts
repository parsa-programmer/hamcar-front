import { useNuxt } from "@nuxt/kit";
import { useAccountStore } from "~~/stores/account.store";

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.toLocaleLowerCase().startsWith("/account")) {
    const cookie = useCookie("token");
    if (!cookie.value) {
      return navigateTo("/auth/login?returnTo=" + to.path);
    } else {
      const account = useAccountStore();
      if (account.isInited == false) {
        account.initData();
      }
    }
  }
});
