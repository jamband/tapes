<script lang="ts">
  import { base } from "$app/paths";
  import { SectionDivider } from "~/components/section-divider";
  import { player, track, trackId } from "~/stores/track";

  $: isSquareRatio = ["Bandcamp", "SoundCloud"].includes($track.provider);
  $: tapePath = $track.path.split("/").slice(0, -1).join("/");
</script>

{#if $trackId}
  <div class="mb-3 grid grid-cols-6 grap-4">
    <div class="col-span-6 {isSquareRatio && 'md:col-span-4 md:col-start-2'}">
      {#key $trackId}
        <iframe
          src={$player}
          class="w-full rounded"
          class:aspect-square={isSquareRatio}
          class:aspect-video={!isSquareRatio}
          title="{$track.title} ･ {$track.provider}"
          allowfullscreen
        />
      {/key}
    </div>
  </div>
  <h3 class="text-center">
    {$track.title}
    <span class="text-xs text-gray-500">{$track.provider}</span>
  </h3>
  <SectionDivider class="my-10" />
  <div class="font-semibold text-sm text-center">
    <a
      sveltekit:prefetch
      class="p-3 hover:text-violet-500"
      href="{base}{tapePath}">← {$track.tape.title}</a
    >
  </div>
{/if}
