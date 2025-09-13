<script lang="ts">
  import { resolve } from "$app/paths";
  import { IconX } from "@/icons/x";
  import { track } from "@/stores/track.svelte";
</script>

<div class="container">
  <a class="link" href={resolve(`/${track.value.path}/`)}>{track.value.title}</a
  >
  <button class="close" onclick={track.clear} aria-label="close"
    ><IconX class="closeIcon" /></button
  >
</div>

<style>
  @import "./component.css";
</style>
