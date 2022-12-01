<script lang="ts">
  let className = "";
  export { className as class };
  export let viewBox: `${number} ${number} ${number} ${number}`;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {viewBox}
  class="inline-block ${className}"
  fill="currentColor"
>
  <slot />
</svg>
