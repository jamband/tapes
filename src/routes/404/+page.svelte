<script lang="ts">
  import { base } from "$app/paths";
  import { SectionDivider } from "~/components/section-divider";
  import { Head } from "~/layouts/head";
</script>

<Head title="Not Found" />
<div class="flex h-[70vh] items-center justify-center">
  <div class="text-center">
    <h1>Not Found</h1>
    <div class="mb-10 text-sm text-gray-400">The page does not exist.</div>
    <SectionDivider class="mb-10" />
    <a class="text-gray-200 hover:text-purple-400" href="{base}/"
      >Go Digging →</a
    >
  </div>
</div>
