<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { HomeLink } from "~/components/home-link";
  import { SectionDivider } from "~/components/section-divider";
  import { TapeHeader } from "~/components/tape-header";
  import { Head } from "~/layouts/head";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<Head title={data.title} />
<TapeHeader
  title="Monthly Favorite Tracks of {$page.params.year}"
  class="mb-10"
/>
<SectionDivider class="mb-10" />
<ul class="mb-10">
  {#each data.tapes as tape (tape.path)}
    <li class="mb-4">
      <a
        class="group pb-0.5 text-2xl font-bold text-gray-100 no-underline shadow-[0_2px_0_0_rgba(236,239,244,0.7)] hover:text-purple-400 hover:shadow-[0_2px_0_0_rgba(192,132,252,0.7)] active:shadow-[0_2px_0_0_rgba(192,132,252,0.7)]"
        href="{base}{tape.path}/"
        >{tape.title}<span
          class="ml-2 align-top text-base text-gray-100/70 group-hover:text-purple-400/70 group-active:text-purple-400/70"
          >→</span
        ></a
      >
      <div class="text-xs text-gray-400">
        {tape.date}
      </div>
    </li>
  {/each}
</ul>
<SectionDivider class="mb-8" />
<HomeLink />
