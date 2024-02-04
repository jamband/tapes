<script lang="ts">
  import { base } from "$app/paths";
  import { IconX } from "@/icons";
  import { tape } from "@/stores/tape";
  import { track } from "@/stores/track";

  const clearTapeAndTrack = () => {
    tape.clear();
    track.clear();
  };
</script>

<div class="container">
  <a class="link" href="{base}{$track.path}">{$track.title}</a>
  <button class="close" on:click={clearTapeAndTrack} aria-label="close"
    ><IconX class="closeIcon" /></button
  >
</div>

<style>
  @import "./component.css";
</style>
