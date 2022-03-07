<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { APP_NAME } from "~/constants/app";

  const [name, repository] = APP_NAME.split("/");
</script>

<header class="fixed z-10 w-full bg-gray-800 text-center font-mono">
  <nav class="font-semibold" aria-label="Header navigation">
    <a
      href="{base}/"
      class="m-1 inline-block px-5 py-3 tracking-tight no-underline"
    >
      <span class="text-xs text-gray-400" class:inject-name={$page.params.track}
        >{name}/</span
      ><span class:inject-repository={$page.params.track}>{repository}</span>
    </a>
  </nav>
</header>

<style src="./style.css">
</style>
