<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { tape } from "@/stores/tape";
  import type { Params } from "@/types/params";

  let params: Params;

  $: params = $page.params;
  $: tapePath = `/${params.year}/${params.month}/${params.tape}`;
</script>

<div class="container">
  <a class="link" href="{base}{tapePath}/"
    ><span class="linkSymbol">←</span>
    {$tape.title}</a
  >
</div>

<style>
  @import "./component.css";
</style>
