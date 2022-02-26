<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { beforeUpdate } from "svelte";
  import { SectionDivider } from "~/components/section-divider";
  import { IconLoading } from "~/icons";
  import { tape } from "~/stores/tape";
  import { player, track } from "~/stores/track";
  import type { Params } from "~/types/params";

  let title = "";
  let playerLoading = true;
  let params: Params;

  const playerLoaded = () => {
    playerLoading = false;
    title = $track.title;
  };

  $: isSquareRatio = ["Bandcamp", "SoundCloud"].includes($track.provider);
  $: params = $page.params;
  $: tapePath = `/${params.year}/${params.month}/${params.tape}`;

  beforeUpdate(() => {
    if (title !== $track.title) {
      playerLoading = true;
    }
  });
</script>

{#if $track.path}
  <div class="mb-3 grid grid-cols-6 grap-4">
    <div
      class="relative col-span-6 {isSquareRatio &&
        'md:col-span-4 md:col-start-2'}"
    >
      {#key $track.path}
        <div
          class="pointer-events-none absolute inset-0 flex items-center justify-center"
          class:hidden={!playerLoading}
        >
          <IconLoading class="h-6 w-6 text-violet-500" />
        </div>
        <iframe
          src={$player}
          class="w-full rounded"
          class:aspect-square={isSquareRatio}
          class:aspect-video={!isSquareRatio}
          title="{$track.title} ･ {$track.provider}"
          allowfullscreen
          on:load={() => playerLoaded()}
        />
      {/key}
    </div>
  </div>
  <div class="text-center">
    <h3>{$track.title}</h3>
    <div class="text-xs text-gray-400">
      via {$track.provider}
    </div>
    <SectionDivider class="my-10" />
    <div class="font-semibold text-sm">
      <a sveltekit:prefetch class="p-3" href="{base}{tapePath}"
        >← {$tape.title}</a
      >
    </div>
  </div>
{/if}
