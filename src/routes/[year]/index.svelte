<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { LinkHome } from "~/components/link-home";
  import { SectionDivider } from "~/components/section-divider";
  import { TapeHeader } from "~/components/tape-header";
  import { APP_NAME, APP_URL } from "~/constants/app";
  import { Page } from "~/layouts/page";
  import type { Tapes } from "~/types/tape";

  export let tapes: Tapes;
  export let title: string;
</script>

<svelte:head>
  <meta name="description" content={title} />
  <meta property="og:title" content="{title} ･ {APP_NAME}" />
  <meta property="og:description" content={title} />
  <meta property="og:url" content="{APP_URL}{$page.params.year}/" />
</svelte:head>

<Page {title} />
<TapeHeader title="Monthly Favorite Tracks of {$page.params.year}" />
<SectionDivider class="my-10" />
<ul>
  {#each tapes as tape (tape.path)}
    <li class="mb-3">
      <a
        sveltekit:prefetch
        class="text-2xl font-semibold text-gray-100"
        href="{base}{tape.path}">{tape.title} →</a
      >
      <div class="text-xs text-gray-400">
        {tape.date}
      </div>
    </li>
  {/each}
</ul>
<SectionDivider class="my-10" />
<LinkHome />
