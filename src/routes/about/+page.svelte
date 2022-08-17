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
  <meta property="og:title" content="About ･ {APP_NAME}" />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content="{APP_URL}about/" />
</svelte:head>

<Page title="About" />
<div class="grid lg:grid-cols-6 lg:gap-4">
  <div class="lg:col-span-4 lg:col-start-2">
    <h1>About</h1>
    <p>
      {APP_DESCRIPTION}
      The music introduced here is selected from
      <ExternalLink href="https://plusarchive.com" class="text-purple-400"
        >PlusArchive<IconExternalLink
          class="h-4 w-4 align-[-0.125em]"
        /></ExternalLink
      >.
    </p>
    <p>
      This website is an open source project. See following for details.
      <ExternalLink
        href="https://github.com/jamband/tapes"
        class="text-purple-400"
        >GitHub: {APP_NAME}<IconExternalLink
          class="h-4 w-4 align-[-0.125em]"
        /></ExternalLink
      >
    </p>
  </div>
</div>
<SectionDivider class="my-10" />
<HomeLink />
