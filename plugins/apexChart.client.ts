import VueApexCharts from "vue3-apexcharts";
export default defineNuxtPlugin((nuxtApp: any) => {
  nuxtApp.vueApp.use(VueApexCharts);
});
