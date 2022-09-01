<script lang="ts">
  import { base } from "$app/paths";
  import { SectionDivider } from "../components/section-divider";
  import { TapeHeader } from "../components/tape-header";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../constants/app";
  import { Page } from "../layouts/page";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content={APP_NAME} />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content={APP_URL} />
</svelte:head>

<Page />
<TapeHeader title="Monthly Favorite Tracks" />
<SectionDivider class="my-10" />
<div class="flex items-center justify-center">
  {#each data.years as year}
    <a
      href="{base}/{year}"
      class="mx-2 rounded bg-gray-700 px-4 py-1 font-mono text-sm no-underline shadow-sm"
      ><span class="text-xs text-gray-400">#</span><span
        class="text-gray-100 active:text-purple-400">{year}</span
      ></a
    >
  {/each}
</div>
