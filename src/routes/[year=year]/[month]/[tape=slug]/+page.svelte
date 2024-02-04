<script lang="ts">
  import { base } from "$app/paths";
  import { SectionDivider } from "@/components/section-divider";
  import { TapeHeader } from "@/components/tape-header";
  import { IconPause } from "@/icons/pause";
  import { IconPlay } from "@/icons/play";
  import { Head } from "@/layouts/head";
  import { track } from "@/stores/track";
  import type { PageData } from "./$types";

  export let data: PageData;
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
      <a class="track" href="{base}{data.tape.path}/{item.slug}">
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
          {#if `${data.tape.path}/${item.slug}` === $track.path}
            <IconPause class="trackIcon" />
          {:else}
            <IconPlay class="trackIcon" />
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
    <a href="{base}/{data.year}" class="backToTapeLink"
      ><span class="backToTapeLinkSymbol">←</span>
      Monthly Favorite Tracks of {data.year}</a
    >
  </div>
</div>

<style>
  @import "./+page.css";
</style>
