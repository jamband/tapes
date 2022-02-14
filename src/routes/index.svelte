<script lang="ts">
  import { base } from "$app/paths";
  import { TapeHeader } from "~/components/tape-header";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "~/constants/app";
  import { Page } from "~/layouts/page";

  const years = ["2022", "2021"];
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content={APP_NAME} />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content={APP_URL} />
</svelte:head>

<Page />
<TapeHeader title="Monthly Favorite Tracks" />
<div class="mt-10 flex items-center justify-center">
  {#each years as year}
    <a
      sveltekit:prefetch
      href="{base}/{year}"
      class="mx-2 px-4 py-1 font-mono no-underline text-sm active:text-violet-500 bg-gray-700 rounded shadow-sm"
      ><span class="text-xs text-gray-400">#</span>{year}</a
    >
  {/each}
</div>
