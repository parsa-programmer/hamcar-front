import { authStore } from "~/stores/auth.store";
import { advertStore } from "~~/stores/advert.store";

export default defineNuxtPlugin(({ pinia }) => {
  const store = authStore();
  store.initData();
});
