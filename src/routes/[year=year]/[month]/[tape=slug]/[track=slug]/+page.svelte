<script lang="ts">
  import { Head } from "@/layouts/head";
  import { tape } from "@/stores/tape.svelte";
  import { track } from "@/stores/track.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const title = `${data.tapeTitle} ･ ${data.track.title}`;

  $effect(() => {
    tape.value = { title: data.tapeTitle };
    track.value = data.track;
  });
</script>

<Head {title} description={`${data.track.title} (via ${data.track.provider})`}>
  <meta property="og:image" content={data.track.image} />
</Head>
