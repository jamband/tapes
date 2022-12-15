import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env["VITE_GITHUB_ACTIONS"] ? "/tapes" : "",
    },
  },
};

export default config;
