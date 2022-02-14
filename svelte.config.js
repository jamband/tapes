import adapter from "@sveltejs/adapter-static";
import { resolve } from "path";
import preprocess from "svelte-preprocess";

const dev = process.env.NODE_ENV === "development";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter(),
    trailingSlash: "always",
    paths: {
      base: dev ? "" : "/tapes",
    },
    vite: {
      resolve: {
        alias: {
          "~": resolve("src"),
        },
      },
    },
  },
};

export default config;
