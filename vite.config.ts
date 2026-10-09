import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

const basePath = process.env.BASE_PATH;

if (basePath && !basePath.startsWith("/")) {
  throw new Error(`BASE_PATH must start with "/": ${basePath}`);
}

export default defineConfig(({ command }) => ({
  plugins: [
    sveltekit({
      adapter: adapter({ fallback: "404.html" }),
      preprocess: [vitePreprocess()],
      paths: {
        base: command === "serve" ? "" : (basePath as `/${string}` | undefined),
        relative: false,
      },
    }),
  ],
}));
