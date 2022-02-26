<script lang="ts">
  import { base } from "$app/paths";
  import { SectionDivider } from "~/components/section-divider";
  import { TapeHeader } from "~/components/tape-header";
  import { APP_NAME, APP_URL } from "~/constants/app";
  import { IconPause, IconPlay } from "~/icons";
  import { Page } from "~/layouts/page";
  import { track } from "~/stores/track";
  import type { Provider } from "~/types/provider";
  import type { Tape } from "~/types/tape";

  export let title: string;
  export let tape: Tape;
  export let year: string;

  const currentUrl = `${APP_URL.slice(0, -1)}${tape.path}/`;

  const isSquareRatio = (provider: Provider | "") => {
    return ["Bandcamp", "SoundCloud"].includes(provider);
  };
</script>

<svelte:head>
  <meta name="description" content={title} />
  <meta property="og:title" content={`${title} ･ ${APP_NAME}`} />
  <meta property="og:description" content={title} />
  <meta property="og:image" content={tape.items[0].image} />
  <meta property="og:url" content={currentUrl} />
</svelte:head>

<Page {title} />
<TapeHeader {title} />
<SectionDivider class="my-10" />
<div class="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
  {#each tape.items as item (item.slug)}
    <a
      sveltekit:prefetch
      class="mb-1 relative shadow active:text-gray-100"
      href="{base}{tape.path}/{item.slug}"
    >
      <img
        class="w-full bg-gray-800 rounded opacity-70"
        class:aspect-square={isSquareRatio(item.provider)}
        class:aspect-video={!isSquareRatio(item.provider)}
        src={item.image}
        loading="lazy"
        alt=""
      />
      <div class="absolute inset-0 flex items-center justify-center opacity-70">
        {#if `${tape.path}/${item.slug}` === $track.path}
          <IconPause class="h-12 w-12 lg:h-14 lg:w-14" />
        {:else}
          <IconPlay class="h-12 w-12 lg:h-14 lg:w-14" />
        {/if}
      </div>
      <div class="px-2 py-1 absolute bottom-0 w-full font-semibold text-right">
        <h4 class="leading-tight truncate">{item.title}</h4>
        <div class="text-xxs truncate">{title}</div>
      </div>
    </a>
  {/each}
</div>
<SectionDivider />
<div class="mt-12 text-center">
  <a href="{base}/{year}" class="p-3 font-semibold"
    >← Monthly Favorite Tracks of {year}</a
  >
</div>
