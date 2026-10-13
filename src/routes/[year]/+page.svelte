<script lang="ts">
  import { HomeLink } from "#/components/home-link/index.ts";
  import { SectionDivider } from "#/components/section-divider/index.ts";
  import { TapeHeader } from "#/components/tape-header/index.ts";
  import { Head } from "#/layouts/head/index.ts";
  import { resolve } from "$app/paths";
  import type { PageProps } from "./$types";

  let { data, params }: PageProps = $props();
</script>

<Head title={data.title} />
<div class="container">
  <TapeHeader title="Monthly Favorite Tracks of {params.year}" />
  <SectionDivider />
  <ul class="main">
    {#each data.tapes as tape (tape.id)}
      <li class="tape">
        {#if tape.path === ""}
          <span class="blankTitle">:: {tape.title} ::</span>
          <div class="date">{tape.date}</div>
        {:else}
          <div>
            <a
              class="title"
              href={resolve("/[year]/[month]/[tape]", {
                year: tape.path.split("/")[1],
                month: tape.path.split("/")[2],
                tape: tape.path.split("/")[3],
              })}>{tape.title}<span class="titleSymbol">→</span></a
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
