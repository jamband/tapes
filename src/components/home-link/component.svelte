<script lang="ts">
  import { base } from "$app/paths";

  let className = "";
  export { className as class };
</script>

<div class="flex justify-center {className}">
  <a
    href="{base}/"
    class="group p-3 text-gray-200 hover:text-purple-400 decoration-gray-200/70 hover:decoration-purple-400/70 active:text-purple-400"
    ><span
      class="text-sm align-top text-gray-200/70 group-hover:text-purple-400/70 group-active:text-purple-400/70"
      >←</span
    > Back to Home</a
  >
</div>
