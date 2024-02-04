<script lang="ts">
  import { HomeLink } from "@/components/home-link";
  import { SectionDivider } from "@/components/section-divider";
  import { APP_DESCRIPTION, APP_NAME } from "@/constants/app";
  import { IconExternalLink } from "@/icons";
  import { Head } from "@/layouts/head";
</script>

<Head title="About" />
<div class="container">
  <div class="main">
    <div class="mainInner">
      <h1>About</h1>
      <p class="description">
        {APP_DESCRIPTION}
        The music introduced here is selected from
        <a
          href="https://plusarchive.com"
          class="link"
          target="_blank"
          rel="noreferrer">PlusArchive<IconExternalLink class="linkIcon" /></a
        >.
      </p>
      <p class="description">
        This website is an open source project. See following for details.
        <a
          href="https://github.com/jamband/tapes"
          class="link"
          target="_blank"
          rel="noreferrer"
          >GitHub: {APP_NAME}<IconExternalLink class="linkIcon" /></a
        >
      </p>
    </div>
  </div>
  <SectionDivider />
  <HomeLink />
</div>

<style>
  @import "./+page.css";
</style>
