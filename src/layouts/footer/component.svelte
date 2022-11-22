<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { ExternalLink } from "~/components/external-link";
  import { IconX } from "~/icons";
  import { tape } from "~/stores/tape";
  import { track } from "~/stores/track";

  $: showPlayerTitle =
    $track.path &&
    !$page.params.track &&
    $page.route.id !== "contact" &&
    $page.route.id !== "about";

  const clearTapeAndTrack = () => {
    tape.clear();
    track.clear();
  };
</script>

<footer class="fixed bottom-0 w-full bg-gray-700">
  {#if showPlayerTitle}
    <div class="flex items-center justify-center py-2 md:container md:mx-auto">
      <a
        class="ml-4 mr-1 overflow-hidden text-ellipsis whitespace-nowrap py-2 text-sm font-semibold text-gray-100 no-underline"
        href="{base}{$track.path}/">{$track.title}</a
      >
      <button
        class="mr-2 rounded px-2 py-1 hover:bg-gray-600 hover:text-gray-100 active:bg-gray-600 active:text-purple-400"
        on:click={clearTapeAndTrack}
        aria-label="close"><IconX class="h-5 w-5 align-[-0.3em]" /></button
      >
    </div>
  {:else}
    <nav
      class="container mx-auto my-3 text-sm text-gray-300"
      aria-label="Footer navigation"
    >
      <div class="flex flex-row justify-center gap-2 md:gap-10">
        <a
          class="rounded px-4 py-1 text-gray-400 no-underline hover:bg-gray-600 hover:text-gray-100 active:bg-gray-600 active:text-gray-100"
          href="{base}/about/">About</a
        >
        <a
          class="rounded px-4 py-1 text-gray-400 no-underline hover:bg-gray-600 hover:text-gray-100 active:bg-gray-600 active:text-gray-100"
          href="{base}/contact/">Contact</a
        >
        <ExternalLink
          class="rounded px-4 py-1 text-gray-400 no-underline hover:bg-gray-600 hover:text-gray-100 active:bg-gray-600 active:text-gray-100"
          href="https://github.com/jamband/tapes">GitHub</ExternalLink
        >
      </div>
    </nav>
  {/if}
</footer>

<style src="./style.css">
</style>
