<script lang="ts">
  import { IconExternalLink } from "~/icons";

  let className = "";
  export { className as class };
  export let title: string;
</script>

<div class={className || undefined}>
  <h1 class="text-center md:mb-1">
    {title}
  </h1>
  <div class="text-center text-sm text-gray-400">
    selected from
    <a
      href="https://plusarchive.com"
      class="group hover:text-purple-400 hover:decoration-purple-400/70 decoration-gray-400/70"
      target="_blank"
      rel="noreferrer"
      >PlusArchive<IconExternalLink
        class="text-gray-400/70 h-4 w-4 align-[-0.2em] group-hover:text-purple-400/70 group-active:text-purple-400/70"
      /></a
    >
  </div>
</div>
