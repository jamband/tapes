<script lang="ts">
  import { HomeLink } from "@/components/home-link";
  import { SectionDivider } from "@/components/section-divider";
  import { IconExternalLink } from "@/icons";
  import { Head } from "@/layouts/head";
</script>

<Head title="Contact" />
<div class="container">
  <div class="main">
    <div class="mainInner">
      <h1>Contact</h1>
      <p class="description">
        Please to the message via
        <a
          href="https://twitter.com/livejam_db"
          class="link"
          target="_blank"
          rel="noreferrer">Twitter<IconExternalLink class="linkIcon" /></a
        >
        or
        <a
          href="https://github.com/jamband/tapes/issues"
          class="link"
          target="_blank"
          rel="noreferrer">GitHub<IconExternalLink class="linkIcon" /></a
        >
        Issues. Thank you.
      </p>
    </div>
  </div>
  <SectionDivider />
  <HomeLink />
</div>

<style>
  @import "./+page.css";
</style>
