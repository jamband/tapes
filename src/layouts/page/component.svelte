<script lang="ts">
  import { APP_NAME } from "$constants/app";

  export let title = "";
  title = title ? `${title} ･ ${APP_NAME}` : APP_NAME;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
