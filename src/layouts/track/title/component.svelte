<script lang="ts">
  import { track } from "@/stores/track";
</script>

<div class="container">
  <h1 class="title">{$track.title}</h1>
  <div class="provider">via {$track.provider}</div>
</div>

<style>
  @import "./component.css";
</style>
