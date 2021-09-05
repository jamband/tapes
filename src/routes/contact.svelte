<script lang="ts">
  import { LinkExternal } from "~/components/link-external";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "~/constants/app";
  import { IconExternalLink } from "~/icons";
  import { Page } from "~/layouts/page";
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content="Contact ･ {APP_NAME}" />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content="{APP_URL}contact/" />
</svelte:head>

<Page title="Contact" />
<div class="grid lg:grid-cols-6 lg:gap-4">
  <div class="lg:col-start-2 lg:col-span-4">
    <h1>Contact</h1>
    <p>
      Please to the message via
      <LinkExternal
        href="https://twitter.com/livejam_db"
        class="text-purple-500"
        >Twitter<IconExternalLink class="ml-0.5 h-4 w-4" /></LinkExternal
      >
      or
      <LinkExternal
        href="https://github.com/jamband/tapes/issues"
        class="text-purple-500"
        >GitHub<IconExternalLink class="ml-0.5 h-4 w-4" /></LinkExternal
      >
      Issues. Thank you.
    </p>
  </div>
</div>
