import { authStore } from "~/stores/auth.store"

export default defineNuxtPlugin(({ pinia }) => {
    const store = authStore();
    store.initData()
})