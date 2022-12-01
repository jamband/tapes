<script lang="ts">
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
      <a
        href="https://twitter.com/livejam_db"
        class="text-purple-400"
        target="_blank"
        rel="noreferrer"
        >Twitter<IconExternalLink class="h-4 w-4 align-[-0.125em]" /></a
      >
      or
      <a
        href="https://github.com/jamband/tapes/issues"
        class="text-purple-400"
        target="_blank"
        rel="noreferrer"
        >GitHub<IconExternalLink class="h-4 w-4 align-[-0.125em]" /></a
      >
      Issues. Thank you.
    </p>
  </div>
</div>
<SectionDivider class="mb-10" />
<HomeLink />
