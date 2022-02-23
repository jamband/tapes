<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { LinkExternal } from "~/components/link-external";
  import { IconX } from "~/icons";
  import { track } from "~/stores/track";
</script>

<footer class="fixed bottom-0 w-full bg-gray-800">
  {#if $track.path && !$page.params.track}
    <div class="py-3 md:container md:mx-auto flex items-center justify-center">
      <span class="ml-4 font-bold text-violet-700 text-xxs align-top"
        >&#9679</span
      >
      <a
        sveltekit:prefetch
        class="ml-4 mr-1 py-1 whitespace-nowrap text-ellipsis overflow-hidden font-semibold text-sm no-underline"
        href="{base}{$track.path}">{$track.title}</a
      >
      <button class="mr-2 p-2" on:click={track.clear}
        ><IconX class="h-5 w-5 text-gray-400" /></button
      >
    </div>
  {:else}
    <nav
      class="py-2 container mx-auto text-sm text-gray-300"
      aria-label="Footer navigation"
    >
      <div class="flex flex-row gap-2 md:gap-10 justify-center">
        <a class="px-5 py-2 no-underline" href="{base}/about">About</a>
        <a class="px-5 py-2 no-underline" href="{base}/contact">Contact</a>
        <LinkExternal
          class="px-5 py-2 no-underline"
          href="https://github.com/jamband/tapes">GitHub</LinkExternal
        >
      </div>
    </nav>
  {/if}
</footer>

<style src="./style.css">
</style>
