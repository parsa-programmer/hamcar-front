import { authStore } from "~/stores/auth.store";
import { useAccountStore } from "~~/stores/account.store";
import { advertStore } from "~~/stores/advert.store";

export default defineNuxtPlugin(({pinia}) => {
  const store = authStore();
  const accountStore = useAccountStore(pinia);
  store.initData().then(() => {
    accountStore.user = store.user!;
  });
});
