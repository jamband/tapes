<script lang="ts">
  import { IconExternalLink } from "~/icons";

  export let title: string;
</script>

<div class={$$props.class}>
  <h1 class="text-center md:mb-0">
    {title}
  </h1>
  <div class="text-center text-sm text-gray-400">
    selected from
    <a
      href="https://plusarchive.com"
      class="hover:text-purple-400"
      target="_blank"
      rel="noreferrer"
      >PlusArchive<IconExternalLink class="h-4 w-4 align-[-0.2em]" /></a
    >
  </div>
</div>
