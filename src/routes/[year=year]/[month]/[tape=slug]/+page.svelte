<script lang="ts">
  import { base } from "$app/paths";
  import { SectionDivider } from "~/components/section-divider";
  import { TapeHeader } from "~/components/tape-header";
  import { APP_NAME, APP_URL } from "~/constants/app";
  import { IconPause, IconPlay } from "~/icons";
  import { Page } from "~/layouts/page";
  import { track } from "~/stores/track";
  import { aspectRatio } from "~/styles/dynamic";
  import type { PageData } from "./$types";

  export let data: PageData;

  const currentUrl = `${APP_URL.slice(0, -1)}${data.tape.path}/`;
</script>

<svelte:head>
  <meta name="description" content={data.title} />
  <meta property="og:title" content={`${data.title} ･ ${APP_NAME}`} />
  <meta property="og:description" content={data.title} />
  <meta property="og:image" content={data.tape.items[0].image} />
  <meta property="og:url" content={currentUrl} />
</svelte:head>

<Page title={data.title} />
<TapeHeader title={data.title} class="mb-10" />
<SectionDivider class="mb-10" />
<div class="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
  {#each data.tape.items as item (item.slug)}
    <a
      class="relative mb-1 text-gray-200 shadow active:text-gray-100"
      href="{base}{data.tape.path}/{item.slug}"
    >
      <img
        class="w-full rounded bg-gray-700 object-cover opacity-70 {aspectRatio(
          item.image_aspect_ratio
        )}"
        src={item.image}
        loading="lazy"
        alt=""
      />
      <div class="absolute inset-0 flex items-center justify-center opacity-70">
        {#if `${data.tape.path}/${item.slug}` === $track.path}
          <IconPause class="h-12 w-12 lg:h-14 lg:w-14" />
        {:else}
          <IconPlay class="h-12 w-12 lg:h-14 lg:w-14" />
        {/if}
      </div>
      <div class="absolute bottom-0 w-full px-2 py-1 text-right font-semibold">
        <h4 class="truncate leading-tight">{item.title}</h4>
        <div class="truncate text-xxs">{data.title}</div>
      </div>
    </a>
  {/each}
</div>
<SectionDivider class="mb-12" />
<div class="flex justify-center">
  <a href="{base}/{data.year}" class="p-3 text-gray-200 hover:text-purple-400"
    >← Monthly Favorite Tracks of {data.year}</a
  >
</div>
