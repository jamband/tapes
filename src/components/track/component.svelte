<script lang="ts">
  import { SectionDivider } from "~/components/section-divider";
  import { TrackLoading } from "~/components/track-loading";
  import { player, track, trackId } from "~/stores/track";

  $: squareRatio = ["Bandcamp", "SoundCloud"].includes($track.provider);
  $: tapePath = $track.path.split("/").slice(0, -1).join("/");
</script>

{#if $trackId}
  <div class="mb-3 grid grid-cols-6 grap-4">
    <div
      class="col-span-6 {squareRatio
        ? 'md:col-span-4 md:col-start-2 aspect-w-1 aspect-h-1'
        : 'aspect-w-16 aspect-h-9'}"
    >
      {#key $trackId}
        <TrackLoading class="flex flex-col items-center justify-center" />
        <iframe
          src={$player}
          class="rounded"
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
    <a sveltekit:prefetch class="hover:text-purple-500" href={tapePath}
      >← {$track.tape.title}</a
    >
  </div>
{/if}
