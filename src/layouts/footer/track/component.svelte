<script lang="ts">
  import { IconXMark } from "#/icons/xmark/index.ts";
  import { track } from "#/stores/track.svelte.ts";
</script>

<div class="container">
  <a class="link" href={track.value.path}>{track.value.title}</a>
  <button class="close" onclick={track.clear} aria-label="close"
    ><IconXMark class="closeIcon" /></button
  >
</div>

<style>
  @import "./component.css";
</style>
