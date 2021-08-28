<script lang="ts">
  import { IconLightningBolt } from "$icons";
</script>

<div class={$$props.class || ""} role="status">
  <IconLightningBolt class="mb-2 h-3 w-3 animate-ping" />
  <span class="font-mono text-xs text-gray-400">Loading...</span>
</div>
