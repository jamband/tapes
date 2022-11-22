<script lang="ts">
  import { base } from "$app/paths";
  import { SectionDivider } from "~/components/section-divider";
  import { TapeHeader } from "~/components/tape-header";
  import { Head } from "~/layouts/head";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<Head />
<TapeHeader title="Monthly Favorite Tracks" class="mb-10" />
<SectionDivider class="mb-10" />
<div class="flex items-center justify-center">
  {#each data.years as year}
    <a
      href="{base}/{year}/"
      class="mx-2 rounded bg-gray-700 px-4 py-1 font-mono text-sm no-underline shadow-sm hover:bg-purple-600"
      ><span class="text-xs text-gray-400">#</span><span class="text-gray-100"
        >{year}</span
      ></a
    >
  {/each}
</div>
