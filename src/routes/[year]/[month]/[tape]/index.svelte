<script lang="ts" context="module">
  import type { LoadInput } from "@sveltejs/kit";

  export const load = async ({ page, fetch }: LoadInput) => {
    const params = page.params;
    const url = `/${params.year}/${params.month}/${params.tape}.json`;
    const response = await fetch(url);

    return {
      props: {
        tape: await response.json(),
      },
    };
  };
</script>

<script lang="ts">
  import { SectionDivider } from "~/components/section-divider";
  import { TapeHeader } from "~/components/tape-header";
  import { APP_NAME, APP_URL } from "~/constants/app";
  import { IconPause, IconPlay } from "~/icons";
  import { Page } from "~/layouts/page";
  import { trackId } from "~/stores/track";
  import type { Tape } from "~/types/tape";

  export let tape: Tape;
  const title = `${tape.date} ${tape.title}`;
  const currentUrl = `${APP_URL.replace(/\/$/, "")}${tape.path}/`;
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
      href="{tape.path}/{item.slug}"
    >
      <img
        class="w-full rounded opacity-70"
        width="354"
        height="199"
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
  <a href="/" class="font-semibold hover:text-purple-500">Home</a>
</div>
