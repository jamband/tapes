<script lang="ts">
  import { LinkExternal } from "~/components/link-external";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "~/constants/app";
  import { IconExternalLink } from "~/icons";
  import { Page } from "~/layouts/page";
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content="About ･ {APP_NAME}" />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content="{APP_URL}about/" />
</svelte:head>

<Page title="About" />
<div class="grid lg:grid-cols-6 lg:gap-4">
  <div class="lg:col-start-2 lg:col-span-4">
    <h1>About</h1>
    <p>
      {APP_DESCRIPTION}
      The music introduced here is selected from
      <LinkExternal href="https://plusarchive.com" class="text-purple-500"
        >PlusArchive<IconExternalLink class="ml-0.5 h-4 w-4" /></LinkExternal
      >
    </p>
    <p>
      This website is an open source project. See following for details.
      <LinkExternal
        href="https://github.com/jamband/tapes"
        class="text-purple-500"
        >GitHub: {APP_NAME}<IconExternalLink
          class="ml-0.5 h-4 w-4"
        /></LinkExternal
      >
    </p>
  </div>
</div>
