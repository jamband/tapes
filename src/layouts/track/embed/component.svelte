<script lang="ts">
  import { player, track } from "@/stores/track";
  import { beforeUpdate } from "svelte";
  import { TrackEmbedLoading } from "./loading";

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

<div class="container">
  <div
    class="containerInner"
    class:containerInnerAspect1x1={$track.embed_aspect_ratio === "1/1"}
    class:containerInnerAspect4x3={$track.embed_aspect_ratio === "4/3"}
  >
    {#key $track.path}
      <div class="loading" class:loadingHidden={!playerLoading}>
        <TrackEmbedLoading class="loadingIcon" />
      </div>
      <iframe
        src={$player}
        class="embed"
        class:aspect1x1={$track.embed_aspect_ratio === "1/1"}
        class:aspect4x3={$track.embed_aspect_ratio === "4/3"}
        class:aspect16x9={$track.embed_aspect_ratio === "16/9"}
        class:aspect21x9={$track.embed_aspect_ratio === "21/9"}
        title="{$track.title} ･ {$track.provider}"
        on:load={() => playerLoaded()}
        allow="fullscreen"
      />
    {/key}
  </div>
</div>

<style>
  @import "./component.css";
</style>
