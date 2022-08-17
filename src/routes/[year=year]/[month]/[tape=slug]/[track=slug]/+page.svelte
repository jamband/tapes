<script lang="ts">
  import { onMount } from "svelte";
  import { APP_NAME, APP_URL } from "../../../../../constants/app";
  import { Page } from "../../../../../layouts/page";
  import { tape } from "../../../../../stores/tape";
  import { track as __track } from "../../../../../stores/track";
  import type { PageData } from "./$types";

  export let data: PageData;

  const title = `${data.tapeTitle} ･ ${data.track.title}`;
  const currentUrl = `${APP_URL.slice(0, -1)}${data.track.path}/`;

  onMount(() => {
    tape.set({ title: data.tapeTitle });
    __track.set(data.track);
  });
</script>

<svelte:head>
  <meta name="description" content={title} />
  <meta property="og:title" content="{title} ･ {APP_NAME}" />
  <meta property="og:description" content={title} />
  <meta property="og:image" content={data.track.image} />
  <meta property="og:url" content={currentUrl} />
</svelte:head>

<Page {title} />
