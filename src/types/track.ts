import type { Tape } from "./tape";

export type Track = {
  title: string;
  provider: "Bandcamp" | "SoundCloud" | "Vimeo" | "YouTube" | "";
  provider_key: string;
  image: string;
  slug: string;
  path: string;
  tape: Pick<Tape, "title">;
};
