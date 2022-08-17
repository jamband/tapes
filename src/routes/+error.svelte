<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { SectionDivider } from "../components/section-divider";
  import { Page } from "../layouts/page";

  const isNotFound = $page.status === 404;
  const title = isNotFound ? "Not Found" : "An Error occured";
  const message = isNotFound ? "The page does not exist." : $page.error.message;
</script>

<Page title="Not Found" />
<div class="flex h-[70vh] items-center justify-center">
  <div class="text-center">
    <h1>{title}</h1>
    <div class="text-sm text-gray-400">{message}</div>
    <SectionDivider class="my-10" />
    <a class="text-gray-200" href="{base}/">Go Digging →</a>
  </div>
</div>
