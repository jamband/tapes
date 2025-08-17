import { initialValue as trackInitialValue } from "@/stores/track.svelte";
import type { Params } from "@/types/params";
import type { Tape, Tapes } from "@/types/tape";
import type { Track } from "@/types/track";
import { glob, readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const baseDir = join(process.cwd(), "src/tapes");

export const getYears = async () => {
  return (await readdir(baseDir, { withFileTypes: true }))
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name)
    .reverse();
};

export const getTapes = async (year: number): Promise<Tapes> => {
  const files = await Array.fromAsync(glob(`${baseDir}/${year}/**/*.json`));
  const tapes: Tapes = await Promise.all(
    files.map(async (file) => {
      const tape = await readFile(file, "utf8");
      const { id, title, path, date }: Tape = JSON.parse(tape);
      return { id, title, path, date };
    }),
  );

  return tapes.sort((a, b) => {
    return a.id > b.id ? -1 : 1;
  });
};

export const getTape = async (params: Params): Promise<Tape> => {
  const tape = await readFile(
    `${baseDir}/${params.year}/${params.month}/${params.tape}.json`,
    "utf8",
  );
  return JSON.parse(tape);
};

export const getTrack = async (params: Params) => {
  const tape = await getTape(params);

  const track = tape.items.find((track: Track) => {
    return params.track === track.slug;
  });

  if (track) {
    track.path = `${params.year}/${params.month}/${params.tape}/${params.track}`;
    return track;
  }

  return trackInitialValue;
};
