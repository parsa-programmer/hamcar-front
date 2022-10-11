import { defineNuxtConfig } from "nuxt";
import { PROXY_CONFIG } from "./utilities/api.config";

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
  build: {
    transpile: ["vue-toastification"],
    html: {
      minify: {
        minifyCSS: true,
        minifyJS: true,
      },
    },
  },
  css: [
    "~/assets/css/dark.css",
    "~/assets/css/app.css",
    "~/assets/css/grid.css",
    "~/assets/css/landing.css",
    "~/assets/css/components.css",
    "~/assets/css/responsive.css",
    "~/assets/css/animation.css",
    "~/assets/css/advertising.css",
    "~/assets/css/technical.css",
  ],
  head: {
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  },
  render: {
    csp: true,
  },
  image: {
    domains: ["dl.test13.ir", "localhost:3000"],
    alias: {
      hamcar: "http://dl.test13.ir",
      static: "http://localhost:3000",
    },
  },
});
