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
  class="initial"
  class:start={state === "start"}
  class:complete={state === "complete"}
  role="status"
></div>

<style>
  @import "./component.css";
</style>
