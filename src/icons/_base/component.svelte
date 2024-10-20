<script lang="ts">
  import type { Props } from "./types";

  let { class: className, viewBox, children }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {viewBox}
  class={className}
  fill="currentColor"
>
  {@render children()}
</svg>
