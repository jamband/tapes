<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { SectionDivider } from "@/components/section-divider";
  import { Head } from "@/layouts/head";

  const isNotFound = $page.status === 404;
  const title = isNotFound ? "Not Found" : "An Error occured";
  const message = isNotFound
    ? "The page does not exist."
    : $page.error?.message;
</script>

<Head title="Not Found" />
<div class="flex h-[70vh] flex-col items-center justify-center text-center">
  <h1>{title}</h1>
  <div class="mb-10">{message}</div>
  <SectionDivider class="mb-10" />
  <a
    class="group p-3 text-gray-200 decoration-gray-200/70 hover:text-purple-400 hover:decoration-purple-400/70 active:decoration-purple-400/70"
    href="{base}/"
    >Go Digging <span
      class="align-top text-sm text-gray-200/70 group-hover:text-purple-400/70 group-active:text-purple-400/70"
      >→</span
    ></a
  >
</div>
