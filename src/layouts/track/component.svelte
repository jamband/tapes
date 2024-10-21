<script lang="ts">
  import { SectionDivider } from "@/components/section-divider";
  import { track } from "@/stores/track.svelte";
  import { TrackEmbed } from "./embed";
  import { TrackFooter } from "./footer";
  import { TrackTitle } from "./title";
</script>

{#if track.value.path}
  <div class="container">
    <div>
      <TrackEmbed />
      <TrackTitle />
    </div>
    <SectionDivider />
    <TrackFooter />
  </div>
{/if}

<style>
  @import "./component.css";
</style>
