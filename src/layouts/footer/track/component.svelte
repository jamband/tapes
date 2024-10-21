<script lang="ts">
  import { base } from "$app/paths";
  import { IconX } from "@/icons/x";
  import { tape } from "@/stores/tape.svelte";
  import { track } from "@/stores/track.svelte";

  const clearTapeAndTrack = () => {
    tape.clear();
    track.clear();
  };
</script>

<div class="container">
  <a class="link" href="{base}{track.value.path}/">{track.value.title}</a>
  <button class="close" on:click={clearTapeAndTrack} aria-label="close"
    ><IconX class="closeIcon" /></button
  >
</div>

<style>
  @import "./component.css";
</style>
