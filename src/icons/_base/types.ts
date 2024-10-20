import type { Snippet } from "svelte";

export type Props = {
  class: string;
  viewBox: `${number} ${number} ${number} ${number}`;
  children: Snippet<[]>;
};

export type IconProps = Pick<Props, "class">;
