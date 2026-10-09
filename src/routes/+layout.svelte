<script lang="ts">
  import "#/styles/app.css";

  import { APP_NAME, APP_URL } from "#/constants/app.ts";
  import { Footer } from "#/layouts/footer/index.ts";
  import { Header } from "#/layouts/header/index.ts";
  import { Loading } from "#/layouts/loading/index.ts";
  import { Track } from "#/layouts/track/index.ts";
  import { page } from "$app/state";
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();

  const currentUrl = APP_URL.replace("/tapes/", "") + page.url.pathname;
</script>

<svelte:head>
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={APP_NAME} />
  <meta property="og:url" content={currentUrl} />
</svelte:head>

<Loading />
<Header />
<main class="main">
  <div class:hidden={!page.params.track}>
    <Track />
  </div>
  {@render children()}
</main>
<Footer />

<style>
  @import "./+layout.css";
</style>
