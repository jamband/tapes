<script lang="ts">
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import { track } from "@/stores/track.svelte";
  import type { Params } from "@/types/params";

  let params = $derived<Params>(page.params);
  let tapePath = $derived(`/${params.year}/${params.month}/${params.tape}`);
</script>

<div class="container">
  <a class="link" href={resolve(`/${tapePath}/`)}
    ><span class="linkSymbol">←</span>
    {track.value.tapeTitle}</a
  >
</div>

<style>
  @import "./component.css";
</style>
