<script lang="ts">
  import { track } from "#/stores/track.svelte.ts";
  import type { Params } from "#/types/params.ts";
  import { page } from "$app/state";

  let params = $derived<Params>(page.params);
  let tapePath = $derived(`/${params.year}/${params.month}/${params.tape}`);
</script>

<div class="container">
  <a class="link" href={tapePath}
    ><span class="linkSymbol">←</span>
    {track.value.tapeTitle}</a
  >
</div>

<style>
  @import "./component.css";
</style>
