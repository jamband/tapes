<script lang="ts">
  import { base } from "$app/paths";

  let className = "";
  export { className as class };
</script>

<div class="flex justify-center {className}">
  <a href="{base}/" class="p-3 text-gray-200 hover:text-purple-400"
    >← Back to Home</a
  >
</div>
