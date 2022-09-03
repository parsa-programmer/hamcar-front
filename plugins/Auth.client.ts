import { authStore } from "~/stores/auth.store";
import { useAccountStore } from "~~/stores/account.store";
import { advertStore } from "~~/stores/advert.store";

export default defineNuxtPlugin(() => {
  const store = authStore();
  const accountStore = useAccountStore();
  store.initData().then(() => {
    accountStore.user = store.user!;
  });
});
