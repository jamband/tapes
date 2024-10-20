import type { Snippet } from "svelte";

export type Props = {
  title?: string;
  description?: string;
  children?: Snippet<[]>;
};
