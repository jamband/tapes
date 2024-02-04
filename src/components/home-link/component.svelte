<script lang="ts">
  import { base } from "$app/paths";

  let className = "";
  export { className as class };
</script>

<div class="container {className}">
  <a href="{base}/" class="link"
    ><span class="linkSymbol">←</span> Back to Home</a
  >
</div>

<style>
  @import "./component.css";
</style>
