import { useNuxt } from "@nuxt/kit";
import { authStore } from "~~/stores/auth.store";

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.toLocaleLowerCase().startsWith("/account")) {
    const cookie = useCookie("token");
    if (!cookie.value) {
      return navigateTo("/auth/login");
    }
  }
});
