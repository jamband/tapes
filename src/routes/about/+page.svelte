<script lang="ts">
  import { HomeLink } from "#/components/home-link/index.ts";
  import { SectionDivider } from "#/components/section-divider/index.ts";
  import { APP_DESCRIPTION, APP_NAME } from "#/constants/app.ts";
  import { IconUpRightFromSquare } from "#/icons/up-right-from-square/index.ts";
  import { Head } from "#/layouts/head/index.ts";
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
          rel="noreferrer"
          >PlusArchive<IconUpRightFromSquare class="linkIcon" /></a
        >.
      </p>
      <p class="description">
        This website is an open source project. See following for details.
        <a
          href="https://github.com/jamband/tapes"
          class="link"
          target="_blank"
          rel="noreferrer"
          >GitHub: {APP_NAME}<IconUpRightFromSquare class="linkIcon" /></a
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
