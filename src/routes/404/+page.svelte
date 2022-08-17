<script lang="ts">
  import { base } from "$app/paths";
  import { SectionDivider } from "../../components/section-divider";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../../constants/app";
  import { Page } from "../../layouts/page";
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content={`Not Found ･ ${APP_NAME}`} />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content={APP_URL} />
</svelte:head>

<Page title="Not Found" />
<div class="flex h-[70vh] items-center justify-center">
  <div class="text-center">
    <h1>Not Found</h1>
    <div class="text-sm text-gray-400">The page does not exist.</div>
    <SectionDivider class="my-10" />
    <a class="text-gray-200" href="{base}/">Go Digging →</a>
  </div>
</div>
