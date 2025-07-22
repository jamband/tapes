<script lang="ts">
  import { page } from "$app/state";
  import { track } from "@/stores/track.svelte";
  import { FooterNavigation } from "./navigation";
  import { FooterTrack } from "./track";

  let showPlayerTitle = $derived(
    track.value.path &&
      !page.params.track &&
      page.route.id !== "contact" &&
      page.route.id !== "about",
  );
</script>

<footer class="container">
  {#if showPlayerTitle}
    <FooterTrack />
  {:else}
    <FooterNavigation />
  {/if}
</footer>

<style>
  @import "./component.css";
</style>
