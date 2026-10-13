<script lang="ts">
  import { IconXMark } from "#/icons/xmark/index.ts";
  import { track } from "#/stores/track.svelte.ts";
  import { resolve } from "$app/paths";

  const params = $derived(track.value.path.split("/"));
</script>

<div class="container">
  <a
    class="link"
    href={resolve("/[year]/[month]/[tape]/[track]", {
      year: params[1],
      month: params[2],
      tape: params[3],
      track: params[4],
    })}>{track.value.title}</a
  >
  <button class="close" onclick={track.clear} aria-label="close"
    ><IconXMark class="closeIcon" /></button
  >
</div>

<style>
  @import "./component.css";
</style>
