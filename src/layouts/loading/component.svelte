<script lang="ts">
  import { navigating } from "$app/stores";

  type State = "initial" | "start" | "complete";

  let state: State = "initial";

  $: if ($navigating) {
    state = "start";
  }

  $: if (!$navigating) {
    setTimeout(() => {
      state = "complete";
    }, 100);

    setTimeout(() => {
      state = "initial";
    }, 500);
  }
</script>

<div
  class="initial"
  class:start={state === "start"}
  class:complete={state === "complete"}
  role="status"
/>

<style src="./style.css">
</style>
