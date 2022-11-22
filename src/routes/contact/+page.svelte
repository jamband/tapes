<script lang="ts">
  import { ExternalLink } from "~/components/external-link";
  import { HomeLink } from "~/components/home-link";
  import { SectionDivider } from "~/components/section-divider";
  import { IconExternalLink } from "~/icons";
  import { Head } from "~/layouts/head";
</script>

<Head title="Contact" />
<div class="mb-10 grid lg:grid-cols-6 lg:gap-4">
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
<SectionDivider class="mb-10" />
<HomeLink />
