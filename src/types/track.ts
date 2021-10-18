import type { Provider } from "./provider";
import type { Tape } from "./tape";

export type Track = {
  title: string;
  provider: Provider | "";
  provider_key: string;
  image: string;
  slug: string;
  path: string;
  tape: Pick<Tape, "title">;
};
