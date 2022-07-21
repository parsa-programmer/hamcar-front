import { defineNuxtConfig } from "nuxt";
import { PROXY_CONFIG } from "./utilities/api.config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  typescript: {
    strict: true,
    shim: false,
  },
  buildModules: ["@pinia/nuxt", "@nuxt/image-edge"],
  vite: {
    server: {
      //@ts-ignore
      proxy: PROXY_CONFIG,
    },
  },
  css: [
    "~/assets/css/dark.css",
    "~/assets/css/app.css",
    "~/assets/css/grid.css",
    "~/assets/css/components.css",
    "~/assets/css/responsive.css",
    "~/assets/css/animation.css",
  ],
  image: {
    domains: ["dl.test13.ir", "localhost:3000"],
    alias: {
      hamcar: "http://dl.test13.ir",
      static: "http://localhost:3000",
    },
  },
});
