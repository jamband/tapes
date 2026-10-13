<script lang="ts">
  import { track } from "#/stores/track.svelte.ts";
  import { resolve } from "$app/paths";

  const params = $derived(track.value.path.split("/"));
</script>

<div class="container">
  <a
    class="link"
    href={resolve("/[year]/[month]/[tape]", {
      year: params[1],
      month: params[2],
      tape: params[3],
    })}><span class="linkSymbol">←</span>{track.value.tapeTitle}</a
  >
</div>

<style>
  @import "./component.css";
</style>
