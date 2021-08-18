<script lang="ts">
  import { page } from "$app/stores";
  import { LinkExternal } from "$components/link-external";
  import { IconVolumeUp, IconX } from "$icons";
  import { track } from "$stores/track";
</script>

<footer class="fixed bottom-0 w-full text-sm bg-gray-800">
  {#if $track.path && !$page.params.track}
    <nav class="flex items-center justify-center font-semibold">
      <IconVolumeUp class="mx-3 h-4 w-4" />
      <a
        class="whitespace-nowrap overflow-ellipsis overflow-hidden hover:text-purple-500"
        href={$track.path}>{$track.title}</a
      >
      <button class="p-3" on:click={track.clear}
        ><IconX class="h-5 w-5 hover:text-purple-500" /></button
      >
    </nav>
  {:else}
    <nav class="container mx-auto text-gray-300" aria-label="Footer navigation">
      <div
        class="py-3 grid grid-cols-3 divide-x divide-gray-600 font-mono font-light text-xs"
      >
        <a class="text-center hover:text-purple-500" href="/about">About</a>
        <a class="text-center hover:text-purple-500" href="/contact">Contact</a>
        <LinkExternal
          class="text-center hover:text-purple-500"
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
