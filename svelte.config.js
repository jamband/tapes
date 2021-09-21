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
      base: process.env["VITE_GITHUB_ACTIONS"] ? "/tapes" : "",
      // base: "/tapes",
    },
    trailingSlash: "always",
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
