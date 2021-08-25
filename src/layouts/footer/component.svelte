<script lang="ts">
  import { page } from "$app/stores";
  import { LinkExternal } from "$components/link-external";
  import { IconVolumeUp, IconX } from "$icons";
  import { track } from "$stores/track";
</script>

<footer class="fixed bottom-0 w-full bg-gray-800">
  {#if $track.path && !$page.params.track}
    <div class="py-1 md:container md:mx-auto flex items-center justify-center">
      <span class="ml-4"><IconVolumeUp class="h-4 w-4" /></span>
      <a
        class="ml-4 mr-1 whitespace-nowrap overflow-ellipsis overflow-hidden font-semibold text-sm hover:text-purple-500"
        href={$track.path}>{$track.title}</a
      >
      <button class="mr-2 p-2" on:click={track.clear}
        ><IconX class="h-5 w-5 hover:text-purple-500" /></button
      >
    </div>
  {:else}
    <nav
      class="py-3 container mx-auto font-mono font-light text-xs text-gray-300"
      aria-label="Footer navigation"
    >
      <div class="grid grid-cols-3 divide-x divide-gray-600 text-center">
        <a class="hover:text-purple-500" href="/about">About</a>
        <a class="hover:text-purple-500" href="/contact">Contact</a>
        <LinkExternal
          class="hover:text-purple-500"
          href="https://github.com/jamband/tapes">GitHub</LinkExternal
        >
      </div>
    </nav>
  {/if}
</footer>

<style>
  footer {
    padding-bottom: env(safe-area-inset-bottom);
  }
</style>
