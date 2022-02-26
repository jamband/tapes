import type { Track } from "./track";

export type Tape = {
  id: number;
  title: string;
  path: string;
  date: string;
  items: Array<Track>;
};

export type Tapes = Array<Pick<Tape, "id" | "title" | "path" | "date">>;
