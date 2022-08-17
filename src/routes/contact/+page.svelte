<script lang="ts">
  import { ExternalLink } from "../../components/external-link";
  import { HomeLink } from "../../components/home-link";
  import { SectionDivider } from "../../components/section-divider";
  import { APP_DESCRIPTION, APP_NAME, APP_URL } from "../../constants/app";
  import { IconExternalLink } from "../../icons";
  import { Page } from "../../layouts/page";
</script>

<svelte:head>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:title" content="Contact ･ {APP_NAME}" />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content="{APP_URL}contact/" />
</svelte:head>

<Page title="Contact" />
<div class="grid lg:grid-cols-6 lg:gap-4">
  <div class="lg:col-span-4 lg:col-start-2">
    <h1>Contact</h1>
    <p>
      Please to the message via
      <ExternalLink
        href="https://twitter.com/livejam_db"
        class="text-purple-400"
        >Twitter<IconExternalLink
          class="h-4 w-4 align-[-0.125em]"
        /></ExternalLink
      >
      or
      <ExternalLink
        href="https://github.com/jamband/tapes/issues"
        class="text-purple-400"
        >GitHub<IconExternalLink
          class="h-4 w-4 align-[-0.125em]"
        /></ExternalLink
      >
      Issues. Thank you.
    </p>
  </div>
</div>
<SectionDivider class="my-10" />
<HomeLink />
