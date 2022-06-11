<script lang="ts">
  export let viewBox: `${number} ${number} ${number} ${number}`;
</script>

<svg
  {...$$restProps}
  xmlns="http://www.w3.org/2000/svg"
  {viewBox}
  class="inline-block ${$$props.class || ''}"
  fill="currentColor"
>
  <slot />
</svg>
