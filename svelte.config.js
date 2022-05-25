import adapter from "@sveltejs/adapter-static";
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
    alias: {
      "~": "src",
    },
    paths: {
      base: process.env["VITE_GITHUB_ACTIONS"] ? "/tapes" : "",
    },
    prerender: {
      default: true,
    },
  },
};

export default config;
