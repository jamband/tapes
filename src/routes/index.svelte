<script lang="ts" context="module">
  import { base } from "$app/paths";
  import type { LoadInput } from "@sveltejs/kit";
  import { MoreTapes } from "~/components/more-tapes";
  import { SectionDivider } from "~/components/section-divider";
  import { TapeHeader } from "~/components/tape-header";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "~/constants/app";
  import { Page } from "~/layouts/page";
  import type { Tapes } from "~/types/tape";

  export const load = async ({ fetch }: LoadInput) => {
    const response = await fetch(`${base}/index.json`);
    const { tapes, years } = await response.json();

    return {
      props: {
        tapes,
        years,
      },
    };
  };
</script>

<script lang="ts">
  export let tapes: Tapes;
  export let years: string[];
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
<ul>
  {#each tapes as tape (tape.path)}
    <li class="mb-3">
      <span class="mr-1 font-bold text-violet-900 text-xxs align-top"
        >&#9679</span
      >
      <a
        sveltekit:prefetch
        class="font-semibold text-2xl hover:text-violet-500"
        href="{base}{tape.path}">{tape.title} →</a
      >
      <div class="ml-5 text-xs text-gray-400">
        {tape.date}
      </div>
    </li>
  {/each}
</ul>
<SectionDivider class="my-10" />
<MoreTapes {years} />
