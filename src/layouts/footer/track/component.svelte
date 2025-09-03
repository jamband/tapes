<script lang="ts">
  import { resolve } from "$app/paths";
  import { IconX } from "@/icons/x";
  import { tape } from "@/stores/tape.svelte";
  import { track } from "@/stores/track.svelte";

  const clearTapeAndTrack = () => {
    tape.clear();
    track.clear();
  };
</script>

<div class="container">
  <a class="link" href={resolve(`/${track.value.path}/`)}>{track.value.title}</a
  >
  <button class="close" onclick={clearTapeAndTrack} aria-label="close"
    ><IconX class="closeIcon" /></button
  >
</div>

<style>
  @import "./component.css";
</style>
