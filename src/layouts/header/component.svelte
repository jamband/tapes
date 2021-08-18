<script lang="ts">
  import { navigating } from "$app/stores";
  import { APP_NAME } from "$constants/app";
  import { IconLightningBolt } from "$icons";

  let loading = false;

  $: if ($navigating) {
    loading = true;
  }

  $: if (!$navigating) {
    setTimeout(() => (loading = false), 250);
  }

  const [name, repository] = APP_NAME.split("/");
</script>

<header class="z-10 fixed w-full text-center bg-gray-800">
  {#if loading}
    <div class="z-20 absolute top-0 w-full h-1 bg-purple-900" />
  {/if}
  <nav class="font-semibold" aria-label="Header navigation">
    <a
      href="/"
      class="m-1 p-2 inline-block font-mono no-underline tracking-tight"
    >
      <span class="text-xs text-gray-400">{name}/</span>{repository}
      <IconLightningBolt
        class="w-3 h-3{loading ? ' animate-ping' : ''}"
        role="status"
      />
    </a>
  </nav>
</header>
