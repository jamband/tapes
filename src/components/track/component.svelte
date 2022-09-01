<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { beforeUpdate } from "svelte";
  import { IconLoading } from "../../icons";
  import { tape } from "../../stores/tape";
  import { player, track } from "../../stores/track";
  import { aspectRatio } from "../../styles/dynamic";
  import type { Params } from "../../types/params";
  import { SectionDivider } from "../section-divider";

  let title = "";
  let playerLoading = true;
  let params: Params;

  const playerLoaded = () => {
    playerLoading = false;
    title = $track.title;
  };

  $: responsiveCol = () => {
    if ($track.embed_aspect_ratio === "1/1") {
      return "md:col-start-3 md:col-span-8";
    }

    if ($track.embed_aspect_ratio === "4/3") {
      return "md:col-start-2 md:col-span-10";
    }

    return "";
  };

  $: params = $page.params;
  $: tapePath = `/${params.year}/${params.month}/${params.tape}`;

  beforeUpdate(() => {
    if (title !== $track.title) {
      playerLoading = true;
    }
  });
</script>

{#if $track.path}
  <div class="mb-3 grid grid-cols-12">
    <div class="relative col-span-12 {responsiveCol()}">
      {#key $track.path}
        <div
          class="pointer-events-none absolute inset-0 flex items-center justify-center"
          class:hidden={!playerLoading}
        >
          <IconLoading class="h-6 w-6 text-purple-500" />
        </div>
        <iframe
          src={$player}
          class="w-full rounded {aspectRatio($track.embed_aspect_ratio)}"
          title="{$track.title} ･ {$track.provider}"
          allowfullscreen
          on:load={() => playerLoaded()}
        />
      {/key}
    </div>
  </div>
  <div class="text-center">
    <h1 class="mb-0 text-2xl">{$track.title}</h1>
    <div class="text-sm text-gray-400">
      via {$track.provider}
    </div>
    <SectionDivider class="my-10" />
    <div class="text-gray-200">
      <a class="p-3" href="{base}{tapePath}">← {$tape.title}</a>
    </div>
  </div>
{/if}
