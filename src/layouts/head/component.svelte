<script lang="ts">
  import { APP_DESCRIPTION, APP_NAME } from "@/constants/app";
  import type { Props } from "./types";

  let { title, description, children }: Props = $props();

  // svelte-ignore state_referenced_locally
  const _title = title ? `${title} ･ ${APP_NAME}` : APP_NAME;
  // svelte-ignore state_referenced_locally
  const _description = description ? description : APP_DESCRIPTION;
</script>

<svelte:head>
  <meta name="description" content={_description} />
  <meta property="og:title" content={_title} />
  <meta property="og:description" content={_description} />
  {@render children?.()}
  <title>{_title}</title>
</svelte:head>
