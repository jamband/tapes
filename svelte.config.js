import adapter from "@sveltejs/adapter-static";
import { resolve } from "path";
import preprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter(),
    target: "#svelte",
    paths: {
      base: process.env.GITHUB_ACTIONS ? "/tapes" : "",
    },
    trailingSlash: "always",
    vite: {
      resolve: {
        alias: {
          $components: resolve("src/components"),
          $constants: resolve("src/constants"),
          $icons: resolve("src/icons"),
          $layouts: resolve("src/layouts"),
          $stores: resolve("src/stores"),
          $styles: resolve("src/styles"),
          $types: resolve("src/types"),
          $utils: resolve("src/utils"),
        },
      },
    },
  },
};

export default config;
