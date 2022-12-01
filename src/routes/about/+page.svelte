<script lang="ts">
  import { HomeLink } from "~/components/home-link";
  import { SectionDivider } from "~/components/section-divider";
  import { APP_DESCRIPTION, APP_NAME } from "~/constants/app";
  import { IconExternalLink } from "~/icons";
  import { Head } from "~/layouts/head";
</script>

<Head title="About" />
<div class="mb-10 grid lg:grid-cols-6 lg:gap-4">
  <div class="lg:col-span-4 lg:col-start-2">
    <h1>About</h1>
    <p>
      {APP_DESCRIPTION}
      The music introduced here is selected from
      <a
        href="https://plusarchive.com"
        class="text-purple-400"
        target="_blank"
        rel="noreferrer"
        >PlusArchive<IconExternalLink class="h-4 w-4 align-[-0.125em]" /></a
      >.
    </p>
    <p>
      This website is an open source project. See following for details.
      <a
        href="https://github.com/jamband/tapes"
        class="text-purple-400"
        target="_blank"
        rel="noreferrer"
        >GitHub: {APP_NAME}<IconExternalLink
          class="h-4 w-4 align-[-0.125em]"
        /></a
      >
    </p>
  </div>
</div>
<SectionDivider class="mb-10" />
<HomeLink />
