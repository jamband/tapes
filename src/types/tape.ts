import type { Track } from "./track";

export type Tape = {
  id: number;
  title: string;
  path: string;
  date: string;
  items: Array<Track>;
};

export type TapeSummary = Pick<Tape, "id" | "title" | "path" | "date">;

export type Tapes = Array<TapeSummary>;
