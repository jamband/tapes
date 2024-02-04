<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { SectionDivider } from "@/components/section-divider";
  import { Head } from "@/layouts/head";

  const isNotFound = $page.status === 404;
  const title = isNotFound ? "Not Found" : "An Error occured";

  const message = isNotFound
    ? "The page does not exist."
    : $page.error?.message;
</script>

<Head title="Not Found" />
<div class="container">
  <div class="main">
    <h1>{title}</h1>
    <p>{message}</p>
  </div>
  <SectionDivider />
  <a class="link" href="{base}/">Go Digging <span class="linkSymbol">→</span></a
  >
</div>

<style>
  @import "./+error.css";
</style>
