<script lang="ts">
  import { IconExternalLink } from "../../icons";
  import { ExternalLink } from "../external-link";

  export let title: string;
</script>

<h1 class="mb-0 text-center">
  {title}
</h1>
<div class="text-center text-sm text-gray-400">
  selected from
  <ExternalLink href="https://plusarchive.com" class="hover:text-purple-400"
    >PlusArchive<IconExternalLink
      class="h-4 w-4 align-[-0.2em]"
    /></ExternalLink
  >
</div>
