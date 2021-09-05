<script lang="ts" context="module">
  import type { LoadInput } from "@sveltejs/kit";

  export const load = async ({ fetch }: LoadInput) => {
    const response = await fetch("/index.json");

    return {
      props: {
        tapes: await response.json(),
      },
    };
  };
</script>

<script lang="ts">
  import { SectionDivider } from "~/components/section-divider";
  import { TapeHeader } from "~/components/tape-header";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "~/constants/app";
  import { Page } from "~/layouts/page";
  import type { Tapes } from "~/types/tape";

  export let tapes: Tapes;
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
      <span class="mr-1 font-bold text-purple-900 text-xxs align-top"
        >&#9679</span
      >
      <a
        sveltekit:prefetch
        class="font-semibold text-2xl hover:text-purple-500"
        href={tape.path}>{tape.title} →</a
      >
      <div class="ml-5 text-xs text-gray-400">
        {tape.date}
      </div>
    </li>
  {/each}
</ul>
