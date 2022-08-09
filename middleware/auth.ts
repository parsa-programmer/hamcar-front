import { authStore } from "~~/stores/auth.store";

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.toLowerCase() === "/auth/login") {
    const store = authStore();
    if (store.isLogin){
      return navigateTo("/account")
    };
  }
});
