import { useAccountStore } from "~~/stores/account.store";

export default defineNuxtRouteMiddleware((to, from) => {
  const account = useAccountStore();
  if (!account.exhibition) {
    return navigateTo("/account");
  }
});
