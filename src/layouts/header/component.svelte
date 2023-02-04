<script lang="ts">
  import { base } from "$app/paths";
  import { APP_NAME } from "@/constants/app";

  const [name, repository] = APP_NAME.split("/");
</script>

<header class="fixed z-10 flex w-full justify-center bg-gray-700 font-mono">
  <nav class="my-2" aria-label="Header navigation">
    <a
      href="{base}/"
      class="m-1 inline-block rounded px-4 py-1 font-bold no-underline hover:bg-gray-600 active:bg-gray-600"
      ><span class="text-xs text-gray-100">{name}/</span><span
        class="text-purple-400">{repository}</span
      ></a
    >
  </nav>
</header>
