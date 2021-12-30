<script lang="ts">
  import { APP_NAME } from "~/constants/app";

  export let title = "";
</script>

<svelte:head>
  <title>{title ? `${title} ･ ${APP_NAME}` : APP_NAME}</title>
</svelte:head>
