<script lang="ts">
  export let href: string;
</script>

<a {href} class={$$props.class || ""} rel="noopener noreferrer" target="_blank"
  ><slot /></a
>
