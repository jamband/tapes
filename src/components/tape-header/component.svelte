<script lang="ts">
  import { IconExternalLink } from "../../icons";
  import { LinkExternal } from "../link-external";

  export let title: string;
</script>

<h1 class="mb-0 text-center">
  {title}
</h1>
<div class="text-center text-sm text-gray-400">
  selected from
  <LinkExternal href="https://plusarchive.com" class="inline-flex items-center"
    >PlusArchive<IconExternalLink class="ml-0.5 h-4 w-4" /></LinkExternal
  >
</div>
