<script lang="ts" context="module">
  import type { ErrorLoadInput } from "@sveltejs/kit";

  export const load = async ({ error, status }: ErrorLoadInput) => {
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
  import { base } from "$app/paths";
  import { SectionDivider } from "~/components/section-divider";
  import { Page } from "~/layouts/page";

  export let title: string;
  export let message: string;
</script>

<Page title="Not Found" />
<div class="flex items-center justify-center h-70vh">
  <div class="text-center">
    <h1>{title}</h1>
    <div class="text-sm text-gray-400">{message}</div>
    <SectionDivider class="my-10" />
    <a class="font-semibold" href="{base}/">Go digging →</a>
  </div>
</div>
