<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { LinkExternal } from "../../components/link-external";
  import { IconX } from "../../icons";
  import { tape } from "../../stores/tape";
  import { track } from "../../stores/track";

  const clearTapeAndTrack = () => {
    tape.clear();
    track.clear();
  };
</script>

<footer class="fixed bottom-0 w-full bg-gray-700">
  {#if $track.path && !$page.params.track}
    <div class="flex items-center justify-center py-2 md:container md:mx-auto">
      <a
        sveltekit:prefetch
        class="ml-4 mr-1 overflow-hidden text-ellipsis whitespace-nowrap py-2 text-sm font-semibold text-gray-100 no-underline"
        href="{base}{$track.path}">{$track.title}</a
      >
      <button class="mr-2 p-2" on:click={clearTapeAndTrack} aria-label="close"
        ><IconX class="h-5 w-5 text-gray-500" /></button
      >
    </div>
  {:else}
    <nav
      class="container mx-auto py-2 text-sm text-gray-300"
      aria-label="Footer navigation"
    >
      <div class="flex flex-row justify-center gap-2 md:gap-10">
        <a
          class="rounded px-5 py-2 text-gray-400 no-underline active:bg-gray-600 active:text-gray-100"
          href="{base}/about">About</a
        >
        <a
          class="rounded px-5 py-2 text-gray-400 no-underline active:bg-gray-600 active:text-gray-100"
          href="{base}/contact">Contact</a
        >
        <LinkExternal
          class="rounded px-5 py-2 text-gray-400 no-underline active:bg-gray-600 active:text-gray-100"
          href="https://github.com/jamband/tapes">GitHub</LinkExternal
        >
      </div>
    </nav>
  {/if}
</footer>

<style src="./style.css">
</style>
