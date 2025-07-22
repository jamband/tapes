<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/state";
  import { tape } from "@/stores/tape.svelte";
  import type { Params } from "@/types/params";

  let params = $derived<Params>(page.params);
  let tapePath = $derived(`/${params.year}/${params.month}/${params.tape}`);
</script>

<div class="container">
  <a class="link" href="{base}{tapePath}/"
    ><span class="linkSymbol">←</span>
    {tape.value.title}</a
  >
</div>

<style>
  @import "./component.css";
</style>
