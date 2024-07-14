// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  // build: {
  //   transpile:
  //     process.env.NODE_ENV === "production"
  //       ? [
  //           "naive-ui",
  //           "vueuc",
  //           "@css-render/vue3-ssr",
  //           "@juggle/resize-observer",
  //           "date-fns",
  //           "@css-render/plugin-bem",
  //         ]
  //       : ["@juggle/resize-observer"],
  // },
  modules: ["@vant/nuxt", "@vite-pwa/nuxt"],
  vite: {
    plugins: [
      Components({
        dts: true,
        resolvers: [NaiveUiResolver()], // Automatically register all components in the `components` directory
      }),
    ],
  },
  pwa: {
    manifest: {
      name: "pwa nuxt 3",
      short_name: "pwa nuxt",
      theme_color: "#8a8a5e",
      description: "anocash",
      icons: [
        {
          src: "image.png",
          sizes: "150x150",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  css: ["@/assets/styles/global.scss"],
});
