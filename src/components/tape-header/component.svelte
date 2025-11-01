<script lang="ts">
  import { IconUpRightFromSquare } from "@/icons/up-right-from-square";
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
      rel="noreferrer">PlusArchive<IconUpRightFromSquare class="linkIcon" /></a
    >
  </div>
</header>

<style>
  @import "./component.css";
</style>
