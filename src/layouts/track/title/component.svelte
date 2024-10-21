<script lang="ts">
  import { track } from "@/stores/track.svelte";
</script>

<div class="container">
  <h1 class="title">{track.value.title}</h1>
  <div class="provider">via {track.value.provider}</div>
</div>

<style>
  @import "./component.css";
</style>
