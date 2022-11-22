<script lang="ts">
  import { APP_DESCRIPTION, APP_NAME } from "~/constants/app";

  export let title = "";
  export let description = "";

  const _title = title ? `${title} ･ ${APP_NAME}` : APP_NAME;
  const _description = description ? description : APP_DESCRIPTION;
</script>

<svelte:head>
  <meta name="description" content={_description} />
  <meta property="og:title" content={APP_NAME} />
  <meta property="og:description" content={_description} />
  <slot />
  <title>{_title}</title>
</svelte:head>
