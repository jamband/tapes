<script lang="ts">
  import { afterNavigate, beforeNavigate } from "$app/navigation";

  let state: "initial" | "start" | "complete" = "initial";

  beforeNavigate(() => {
    state = "start";
  });

  afterNavigate(() => {
    setTimeout(() => {
      state = "complete";
    }, 100);

    setTimeout(() => {
      state = "initial";
    }, 500);
  });
</script>

<div
  class="fixed z-50 h-1 w-0 bg-purple-500 {state === 'start'
    ? 'w-[99%] bg-purple-500/40 transition-[width] duration-[10000ms] ease-[cubic-bezier(0.1,0.05,0,1)]'
    : ''} {state === 'complete'
    ? 'w-[100%] bg-purple-500/60 transition-[width_0.1s_ease-out]'
    : ''}"
  role="status"
/>
