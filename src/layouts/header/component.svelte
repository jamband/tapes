<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { APP_NAME } from "~/constants/app";

  const [name, repository] = APP_NAME.split("/");
</script>

<header class="z-10 fixed w-full font-mono text-center bg-gray-800">
  <nav class="font-semibold" aria-label="Header navigation">
    <a href="{base}/" class="m-1 p-2 inline-block no-underline tracking-tight">
      <span class="text-xs text-gray-400" class:inject-name={$page.params.track}
        >{name}/</span
      ><span class:inject-repository={$page.params.track}>{repository}</span>
    </a>
  </nav>
</header>

<style src="./style.css">
</style>
