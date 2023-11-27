<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { SectionDivider } from "@/components/section-divider";
  import { IconLoading } from "@/icons";
  import { tape } from "@/stores/tape";
  import { player, track } from "@/stores/track";
  import { aspectRatio } from "@/styles/dynamic";
  import type { Params } from "@/types/params";
  import { beforeUpdate } from "svelte";

  let title = "";
  let playerLoading = true;
  let params: Params;

  const playerLoaded = () => {
    playerLoading = false;
    title = $track.title;
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
    <div
      class="relative col-span-12 {$track.embed_aspect_ratio === '1/1'
        ? 'md:col-span-8 md:col-start-3'
        : ''} {$track.embed_aspect_ratio === '4/3'
        ? 'md:col-span-10 md:col-start-2'
        : ''}"
    >
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
          on:load={() => playerLoaded()}
          allow="fullscreen"
        />
      {/key}
    </div>
  </div>
  <div class="text-center">
    <h1 class="mb-0 text-2xl">{$track.title}</h1>
    <div class="mb-10 text-sm text-gray-400">
      via {$track.provider}
    </div>
    <SectionDivider class="mb-10" />
    <div class="text-gray-200">
      <a
        class="group p-3 decoration-gray-200/70 hover:text-purple-400 hover:decoration-purple-400/70"
        href="{base}{tapePath}/"
        ><span
          class="align-top text-sm text-gray-200/70 group-hover:text-purple-400/70 group-active:text-purple-400/70"
          >←</span
        >
        {$tape.title}</a
      >
    </div>
  </div>
{/if}
