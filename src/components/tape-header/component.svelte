<script lang="ts">
  import { IconExternalLink } from "@/icons/external-link";

  export let title: string;
</script>

<header class="container">
  <h1>{title}</h1>
  <div class="description">
    selected from
    <a
      href="https://plusarchive.com"
      class="link"
      target="_blank"
      rel="noreferrer">PlusArchive<IconExternalLink class="linkIcon" /></a
    >
  </div>
</header>

<style>
  @import "./component.css";
</style>
