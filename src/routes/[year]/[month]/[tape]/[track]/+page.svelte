<script lang="ts">
  import { Head } from "#/layouts/head/index.ts";
  import { track } from "#/stores/track.svelte.ts";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  $effect(() => {
    track.value = data.track;
  });
</script>

<Head
  title={`${data.track.tapeTitle} ･ ${data.track.title}`}
  description={`${data.track.title} (via ${data.track.provider})`}
>
  <meta property="og:image" content={data.track.image} />
</Head>
