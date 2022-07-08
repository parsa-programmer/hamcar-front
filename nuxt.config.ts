import { defineNuxtConfig } from "nuxt";
import { PROXY_CONFIG } from "./utilities/api.config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
    strict: true,
  },
  buildModules: ["@pinia/nuxt"],
});
