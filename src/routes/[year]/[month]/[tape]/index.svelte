<script lang="ts" context="module">
  import { base } from "$app/paths";
  import type { LoadInput } from "@sveltejs/kit";
  import { SectionDivider } from "~/components/section-divider";
  import { TapeHeader } from "~/components/tape-header";
  import { APP_NAME, APP_URL } from "~/constants/app";
  import { IconPause, IconPlay } from "~/icons";
  import { Page } from "~/layouts/page";
  import { trackId } from "~/stores/track";
  import type { Provider } from "~/types/provider";
  import type { Tape } from "~/types/tape";

  export const load = async ({ fetch, params }: LoadInput) => {
    const url = `${base}/${params.year}/${params.month}/${params.tape}.json`;
    const response = await fetch(url);

    return {
      props: {
        tape: await response.json(),
        year: params.year,
      },
    };
  };
</script>

<script lang="ts">
  export let tape: Tape;
  export let year: string;

  const title = `${tape.date} ${tape.title}`;
  const currentUrl = `${APP_URL.replace(/\/$/, "")}${tape.path}/`;

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
      class="mb-1 relative shadow"
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
        {#if item.provider + item.provider_key === $trackId}
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
  <a href="{base}/{year}" class="p-3 font-semibold hover:text-violet-500"
    >← Monthly Favorite Tracks on {year}</a
  >
</div>
