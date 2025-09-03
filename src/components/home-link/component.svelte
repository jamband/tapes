<script lang="ts">
  import { resolve } from "$app/paths";
  import type { Props } from "./types";

  let { class: className }: Props = $props();
</script>

<div class="container {className}">
  <a href={resolve("/")} class="link"
    ><span class="linkSymbol">←</span> Back to Home</a
  >
</div>

<style>
  @import "./component.css";
</style>
