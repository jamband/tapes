<script lang="ts">
  import { onMount } from "svelte";
  import { APP_NAME, APP_URL } from "../../../../../constants/app";
  import { Page } from "../../../../../layouts/page";
  import { tape } from "../../../../../stores/tape";
  import { track as __track } from "../../../../../stores/track";
  import type { Track } from "../../../../../types/track";

  export let tapeTitle: string;
  export let track: Track;

  const title = `${tapeTitle} ･ ${track.title}`;
  const currentUrl = `${APP_URL.slice(0, -1)}${track.path}/`;

  onMount(() => {
    tape.set({ title: tapeTitle });
    __track.set(track);
  });
</script>

<svelte:head>
  <meta name="description" content={title} />
  <meta property="og:title" content="{title} ･ {APP_NAME}" />
  <meta property="og:description" content={title} />
  <meta property="og:image" content={track.image} />
  <meta property="og:url" content={currentUrl} />
</svelte:head>

<Page {title} />
