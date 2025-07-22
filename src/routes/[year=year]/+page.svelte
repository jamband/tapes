<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/state";
  import { HomeLink } from "@/components/home-link";
  import { SectionDivider } from "@/components/section-divider";
  import { TapeHeader } from "@/components/tape-header";
  import { Head } from "@/layouts/head";

  let { data } = $props();
</script>

<Head title={data.title} />
<div class="container">
  <TapeHeader title="Monthly Favorite Tracks of {page.params.year}" />
  <SectionDivider />
  <ul class="main">
    {#each data.tapes as tape (tape.id)}
      <li class="tape">
        {#if tape.path === ""}
          <span class="blankTitle">:: {tape.title} ::</span>
          <div class="date">{tape.date}</div>
        {:else}
          <div>
            <a class="title" href="{base}{tape.path}/"
              >{tape.title}<span class="titleSymbol">→</span></a
            >
          </div>
          <div class="date">{tape.date}</div>
        {/if}
      </li>
    {/each}
  </ul>
  <SectionDivider />
  <HomeLink />
</div>

<style>
  @import "./+page.css";
</style>
