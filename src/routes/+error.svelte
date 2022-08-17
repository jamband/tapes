<script lang="ts" context="module">
  import { base } from "$app/paths";
  import type { Load } from "@sveltejs/kit";
  import { SectionDivider } from "../components/section-divider";
  import { Page } from "../layouts/page";

  export const load: Load = ({ error, status }) => {
    const isNotFound = status === 404;

    return {
      props: {
        title: isNotFound ? "Not Found" : "An Error occured",
        message: isNotFound ? "The page does not exist." : error?.message,
      },
    };
  };
</script>

<script lang="ts">
  export let title: string;
  export let message: string;
</script>

<Page title="Not Found" />
<div class="flex h-[70vh] items-center justify-center">
  <div class="text-center">
    <h1>{title}</h1>
    <div class="text-sm text-gray-400">{message}</div>
    <SectionDivider class="my-10" />
    <a class="text-gray-200" href="{base}/">Go Digging →</a>
  </div>
</div>
