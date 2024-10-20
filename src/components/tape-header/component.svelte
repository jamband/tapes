<script lang="ts">
  import { IconExternalLink } from "@/icons/external-link";
  import type { Props } from "./types";

  let { title }: Props = $props();
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
