<script lang="ts">
  import "@/styles/app.css";

  import { page } from "$app/state";
  import { APP_NAME, APP_URL } from "@/constants/app";
  import { Footer } from "@/layouts/footer";
  import { Header } from "@/layouts/header";
  import { Loading } from "@/layouts/loading";
  import { Track } from "@/layouts/track";
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
