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
    <li class="mb-3">
      <a
        class="text-2xl font-semibold text-gray-100 hover:text-purple-400"
        href="{base}{tape.path}/">{tape.title} →</a
      >
      <div class="text-xs text-gray-400">
        {tape.date}
      </div>
    </li>
  {/each}
</ul>
<SectionDivider class="mb-8" />
<HomeLink />
