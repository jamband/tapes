<script lang="ts">
  export let years: string[];
</script>

<h2 class="text-center">more tapes</h2>
<div class="mb-8 text-xs text-center text-gray-400">please select a year</div>
<div class="flex items-center justify-center">
  {#each years as year}
    <a
      sveltekit:prefetch
      href="/{year}"
      class="mx-2 px-4 py-1 font-mono no-underline text-sm active:text-violet-500 bg-gray-700 rounded shadow-sm"
      ><span class="text-xs text-gray-400">#</span>{year}</a
    >
  {/each}
</div>
