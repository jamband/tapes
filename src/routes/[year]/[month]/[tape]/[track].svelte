<script lang="ts" context="module">
  import { browser } from "$app/env";
  import { base } from "$app/paths";
  import type { LoadInput } from "@sveltejs/kit";
  import { APP_NAME, APP_URL } from "~/constants/app";
  import { Page } from "~/layouts/page";
  import { track as __track } from "~/stores/track";
  import type { Track } from "~/types/track";

  export const load = async ({ fetch, params }: LoadInput) => {
    const urlPrefix = browser ? base : "";
    const url = `${urlPrefix}/${params.year}/${params.month}/${params.tape}/${params.track}.json`;
    const response = await fetch(url);

    return {
      props: {
        track: await response.json(),
      },
    };
  };
</script>

<script lang="ts">
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
