<script lang="ts">
  import { IconLightningBolt } from "$icons";
</script>

<div class={$$props.class || ""} role="status">
  <IconLightningBolt class="mr-2 h-3 w-3 animate-ping" />
  <span class="font-mono text-sm text-gray-400">Loading...</span>
</div>
