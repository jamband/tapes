<script lang="ts">
  import { base } from "$app/paths";
  import { APP_NAME } from "~/constants/app";

  const [name, repository] = APP_NAME.split("/");
</script>

<header class="z-10 fixed w-full font-mono text-center bg-gray-800">
  <nav class="font-semibold" aria-label="Header navigation">
    <a href="{base}/" class="m-1 p-2 inline-block no-underline tracking-tight">
      <span class="text-xs text-gray-400">{name}/</span>{repository}
    </a>
  </nav>
</header>
