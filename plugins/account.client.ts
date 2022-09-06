import { useAccountStore } from "~~/stores/account.store";
import { advertStore } from "~~/stores/advert.store";
import { authStore } from "~~/stores/auth.store";

export default defineNuxtPlugin(() => {
  const route = useRoute();
  const store = authStore();
  const accountStore = useAccountStore();

  if (route.path.startsWith("/account") && store.isLogin) {
    accountStore.initData();
  }
});
