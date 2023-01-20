<script lang="ts">
  import { page } from "$app/stores";
  import { APP_NAME, APP_URL } from "@/constants/app";
  import { Footer } from "@/layouts/footer";
  import { Header } from "@/layouts/header";
  import { Loading } from "@/layouts/loading";
  import { Track } from "@/layouts/track";
  import "@/styles/app.css";

  const currentUrl = APP_URL.replace("/tapes/", "") + $page.url.pathname;
</script>

<svelte:head>
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={APP_NAME} />
  <meta property="og:url" content={currentUrl} />
</svelte:head>

<Loading />
<Header />
<main class="container mx-auto pb-32 pt-28">
  <div class:hidden={!$page.params.track}>
    <Track />
  </div>
  <slot />
</main>
<Footer />
