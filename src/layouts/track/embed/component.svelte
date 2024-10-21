<script lang="ts">
  import { APP_PRIMARY_COLOR } from "@/constants/app";
  import { track } from "@/stores/track.svelte";
  import { TrackEmbedLoading } from "./loading";

  const player = $derived.by(() => {
    if (track.value.provider === "Bandcamp") {
      return `https://bandcamp.com/EmbeddedPlayer/track=${track.value.provider_key}/size=large/tracklist=false/bgcol=333333/linkcol=${APP_PRIMARY_COLOR}`;
    }
    if (track.value.provider === "SoundCloud") {
      return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.value.provider_key}&show_comments=false&hide_related=true&visual=true`;
    }
    if (track.value.provider === "Vimeo") {
      return `https://player.vimeo.com/video/${track.value.provider_key}`;
    }
    return `https://www.youtube.com/embed/${track.value.provider_key}?rel=0&playsinline=1`;
  });

  let title = $state("");
  let playerLoading = $state(true);

  const playerLoaded = () => {
    playerLoading = false;
    title = track.value.title;
  };

  $effect.pre(() => {
    if (title !== track.value.title) {
      playerLoading = true;
    }
  });
</script>

<div class="container">
  <div
    class="containerInner"
    class:containerInnerAspect1x1={track.value.embed_aspect_ratio === "1/1"}
    class:containerInnerAspect4x3={track.value.embed_aspect_ratio === "4/3"}
  >
    {#key track.value.path}
      <div class="loading" class:loadingHidden={!playerLoading}>
        <TrackEmbedLoading class="loadingIcon" />
      </div>
      <iframe
        src={player}
        class="embed"
        class:aspect1x1={track.value.embed_aspect_ratio === "1/1"}
        class:aspect4x3={track.value.embed_aspect_ratio === "4/3"}
        class:aspect16x9={track.value.embed_aspect_ratio === "16/9"}
        class:aspect21x9={track.value.embed_aspect_ratio === "21/9"}
        title="{track.value.title} ･ {track.value.provider}"
        onload={() => playerLoaded()}
        allow="fullscreen"
      ></iframe>
    {/key}
  </div>
</div>

<style>
  @import "./component.css";
</style>
