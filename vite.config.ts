import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: adapter({ fallback: "404.html" }),
      preprocess: [vitePreprocess()],
      paths: {
        base: "/tapes",
        relative: false,
      },
    }),
  ],
});
