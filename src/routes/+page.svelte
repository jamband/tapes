<script lang="ts">
  import { base } from "$app/paths";
  import { SectionDivider } from "@/components/section-divider";
  import { TapeHeader } from "@/components/tape-header";
  import { Head } from "@/layouts/head";

  let { data } = $props();
</script>

<Head />
<div class="container">
  <TapeHeader title="Monthly Favorite Tracks" />
  <SectionDivider />
  <div class="main">
    {#each data.years as year}
      <a href="{base}/{year}/" class="link"
        ><span class="linkSymbol">#</span>{year}</a
      >
    {/each}
  </div>
</div>

<style>
  @import "./+page.css";
</style>
