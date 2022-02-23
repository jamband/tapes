<script lang="ts">
  import { base } from "$app/paths";
  import { beforeUpdate } from "svelte";
  import { SectionDivider } from "~/components/section-divider";
  import { IconLoading } from "~/icons";
  import { player, track, trackId } from "~/stores/track";

  $: isSquareRatio = ["Bandcamp", "SoundCloud"].includes($track.provider);
  $: tapePath = $track.path.split("/").slice(0, -1).join("/");

  let title = "";
  let playerLoading = true;

  const playerLoaded = () => {
    playerLoading = false;
    title = $track.title;
  };

  beforeUpdate(() => {
    if (title !== $track.title) {
      playerLoading = true;
    }
  });
</script>

{#if $trackId}
  <div class="mb-3 grid grid-cols-6 grap-4">
    <div
      class="relative col-span-6 {isSquareRatio &&
        'md:col-span-4 md:col-start-2'}"
    >
      {#key $trackId}
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
        >← {$track.tape.title}</a
      >
    </div>
  </div>
{/if}
