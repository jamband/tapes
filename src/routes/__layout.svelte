<script lang="ts">
  import "~/styles/app.css";
  import { page } from "$app/stores";
  import { Track } from "~/components/track";
  import { APP_NAME } from "~/constants/app";
  import { Footer } from "~/layouts/footer";
  import { Header } from "~/layouts/header";
  import { Loading } from "~/layouts/loading";
</script>

<svelte:head>
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={APP_NAME} />
</svelte:head>

<div class="flex flex-col min-h-screen">
  <Loading />
  <Header />
  <main class="py-28 flex-grow container mx-auto">
    <div class:hidden={!$page.params.track}>
      <Track />
    </div>
    <slot />
  </main>
  <Footer />
</div>
