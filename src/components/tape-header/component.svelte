<script lang="ts">
  import { LinkExternal } from "~/components/link-external";
  import { IconExternalLink } from "~/icons";

  export let title: string;
</script>

<h1 class="mb-0 font-bold text-center">
  {title}
</h1>
<div class="text-center text-xs text-gray-400">
  selected from
  <LinkExternal
    href="https://plusarchive.com"
    class="inline-flex items-center hover:text-violet-500"
    >PlusArchive<IconExternalLink class="ml-0.5 h-4 w-4" /></LinkExternal
  >
</div>
