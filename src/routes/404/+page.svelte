<script lang="ts">
  import { base } from "$app/paths";
  import { SectionDivider } from "@/components/section-divider";
  import { Head } from "@/layouts/head";
</script>

<Head title="Not Found" />
<div class="container">
  <div class="main">
    <h1>Not Found</h1>
    <div class="description">The page does not exist.</div>
  </div>
  <SectionDivider />
  <a class="link" href="{base}/">Go Digging <span class="linkSymbol">→</span></a
  >
</div>

<style>
  @import "./+page.css";
</style>
