<script lang="ts">
  import { SectionDivider } from "#/components/section-divider/index.ts";
  import { Head } from "#/layouts/head/index.ts";
  import { resolve } from "$app/paths";
  import { page } from "$app/state";

  const isNotFound = page.status === 404;
  const title = isNotFound ? "Not Found" : "An Error occured";

  const message = isNotFound ? "The page does not exist." : page.error?.message;
</script>

<Head title="Not Found" />
<div class="container">
  <div class="main">
    <h1>{title}</h1>
    <p>{message}</p>
  </div>
  <SectionDivider />
  <a class="link" href={resolve("/")}
    >Go Digging <span class="linkSymbol">→</span></a
  >
</div>

<style>
  @import "./+error.css";
</style>
