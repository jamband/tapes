import type { Provider } from "./provider";

export type Track = {
  title: string;
  provider: Provider | "";
  provider_key: string;
  image: string;
  slug: string;
  path: string;
};
