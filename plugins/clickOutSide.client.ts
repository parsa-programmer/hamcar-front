import vClickOutside from "click-outside-vue3";
export default defineNuxtPlugin((nuxtApp: any) => {
    nuxtApp.vueApp.use(vClickOutside)
});
