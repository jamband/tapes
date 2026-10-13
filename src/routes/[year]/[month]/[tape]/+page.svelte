<script lang="ts">
  import { SectionDivider } from "#/components/section-divider/index.ts";
  import { TapeHeader } from "#/components/tape-header/index.ts";
  import { IconCirclePause } from "#/icons/circle-pause/index.ts";
  import { IconCirclePlay } from "#/icons/circle-play/index.ts";
  import { Head } from "#/layouts/head/index.ts";
  import { track } from "#/stores/track.svelte.ts";
  import { resolve } from "$app/paths";
  import type { PageProps } from "./$types";

  let { data, params }: PageProps = $props();
</script>

<Head
  title={data.title}
  description={`${data.title}, selected from PlusArchive`}
>
  <meta property="og:image" content={data.tape.items[0].image} />
</Head>
<div class="container">
  <TapeHeader title={data.title} />
  <SectionDivider />
  <div class="main">
    {#each data.tape.items as item (item.slug)}
      <a
        class="track"
        href={resolve("/[year]/[month]/[tape]/[track]", {
          year: params.year,
          month: params.month,
          tape: params.tape,
          track: item.slug,
        })}
      >
        <img
          class="trackImage"
          class:aspect1x1={item.image_aspect_ratio === "1/1"}
          class:aspect4x3={item.image_aspect_ratio === "4/3"}
          class:aspect16x9={item.image_aspect_ratio === "16/9"}
          class:aspect21x9={item.image_aspect_ratio === "21/9"}
          src={item.image}
          loading="lazy"
          alt=""
        />
        <div class="trackIconStatus">
          {#if `${data.tape.path}/${item.slug}` === track.value.path}
            <IconCirclePause class="trackIcon" />
          {:else}
            <IconCirclePlay class="trackIcon" />
          {/if}
        </div>
        <div class="trackFooter">
          <h4 class="trackFooterTitle">{item.title}</h4>
          <div class="trackFooterTapeTitle">{data.title}</div>
        </div>
      </a>
    {/each}
  </div>
  <SectionDivider />
  <div class="backToTape">
    <a href={resolve(`/[year]`, { year: params.year })} class="backToTapeLink"
      ><span class="backToTapeLinkSymbol">←</span>
      Monthly Favorite Tracks of {params.year}</a
    >
  </div>
</div>

<style>
  @import "./+page.css";
</style>
