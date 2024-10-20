<script lang="ts">
  import { Head } from "@/layouts/head";
  import { tape } from "@/stores/tape";
  import { track } from "@/stores/track";
  import { onMount } from "svelte";

  let { data } = $props();

  const title = `${data.tapeTitle} ･ ${data.track.title}`;

  onMount(() => {
    tape.set({ title: data.tapeTitle });
    track.set(data.track);
  });
</script>

<Head {title} description={`${data.track.title} (via ${data.track.provider})`}>
  <meta property="og:image" content={data.track.image} />
</Head>
