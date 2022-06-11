<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { APP_NAME } from "../../constants/app";

  const [name, repository] = APP_NAME.split("/");
</script>

<header class="fixed z-10 w-full bg-gray-700 text-center font-mono">
  <nav class="my-1" aria-label="Header navigation">
    <a
      href="{base}/"
      class="m-1 inline-block rounded px-4 py-2 no-underline active:bg-gray-600"
    >
      <span
        class="text-xs font-semibold text-gray-400"
        class:inject-name={$page.params.track}>{name}/</span
      ><span
        class="font-bold text-gray-100"
        class:inject-repository={$page.params.track}>{repository}</span
      >
    </a>
  </nav>
</header>

<style src="./style.css">
</style>
