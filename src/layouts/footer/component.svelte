<script lang="ts">
  import { page } from "$app/stores";
  import { LinkExternal } from "~/components/link-external";
  import { IconX } from "~/icons";
  import { track } from "~/stores/track";
</script>

<footer class="fixed bottom-0 w-full bg-gray-800">
  {#if $track.path && !$page.params.track}
    <div class="py-1 md:container md:mx-auto flex items-center justify-center">
      <span class="font-bold text-purple-800 text-xxs align-top">&#9679</span>
      <a
        sveltekit:prefetch
        class="ml-4 mr-1 py-1 whitespace-nowrap overflow-ellipsis overflow-hidden font-semibold text-sm"
        href={$track.path}>{$track.title}</a
      >
      <button class="mr-2 p-2" on:click={track.clear}
        ><IconX class="h-5 w-5" /></button
      >
    </div>
  {:else}
    <nav
      class="py-2 container mx-auto text-sm text-gray-300"
      aria-label="Footer navigation"
    >
      <div class="grid grid-cols-3 divide-x divide-gray-600 text-center">
        <a class="py-1" href="/about">About</a>
        <a class="py-1" href="/contact">Contact</a>
        <LinkExternal class="py-1" href="https://github.com/jamband/tapes"
          >GitHub</LinkExternal
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
