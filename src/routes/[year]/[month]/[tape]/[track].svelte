<script lang="ts">
  import { APP_NAME, APP_URL } from "~/constants/app";
  import { Page } from "~/layouts/page";
  import { track as __track } from "~/stores/track";
  import type { Track } from "~/types/track";

  export let track: Track;

  __track.set(track);

  const title = `${$__track.tape.title} ･ ${track.title}`;
  const currentUrl = `${APP_URL.replace(/\/$/, "")}${track.path}/`;
</script>

<svelte:head>
  <meta name="description" content={title} />
  <meta property="og:title" content="{title} ･ {APP_NAME}" />
  <meta property="og:description" content={title} />
  <meta property="og:image" content={track.image} />
  <meta property="og:url" content={currentUrl} />
</svelte:head>

<Page title="{$__track.tape.title} ･ {track.title}" />
