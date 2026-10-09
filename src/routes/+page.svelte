<script lang="ts">
  import { SectionDivider } from "#/components/section-divider/index.ts";
  import { TapeHeader } from "#/components/tape-header/index.ts";
  import { Head } from "#/layouts/head/index.ts";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<Head />
<div class="container">
  <TapeHeader title="Monthly Favorite Tracks" />
  <SectionDivider />
  <div class="main">
    {#each data.years as year (year)}
      <a href={year} class="link"><span class="linkSymbol">#</span>{year}</a>
    {/each}
  </div>
</div>

<style>
  @import "./+page.css";
</style>
