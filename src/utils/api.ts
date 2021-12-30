import fs from "fs";
import glob from "glob";
import { join } from "path";
import type { Params } from "~/types/params";
import type { Tape, Tapes } from "~/types/tape";
import type { Track } from "~/types/track";

const baseDir = join(process.cwd(), "src/tapes");

const contents = (path: string) => {
  return fs.readFileSync(path, "utf8");
};

const tapePath = (params: Params) => {
  return `/${params.year}/${params.month}/${params.tape}`;
};

export const getTapes = (year: number): Tapes => {
  const tapes = glob.sync(`${baseDir}/${year}/**/*.json`).map((file) => {
    const { id, title, path, date }: Tape = JSON.parse(contents(file));
    return { id, title, path, date };
  });

  return tapes.sort((a, b) => {
    return a.id > b.id ? -1 : 1;
  });
};

export const getYears = fs
  .readdirSync(baseDir, { withFileTypes: true })
  .filter((dir) => dir.isDirectory())
  .map((dir) => dir.name)
  .reverse();

export const getTape = (params: Params): Tape => {
  const path = `${tapePath(params)}.json`;
  return JSON.parse(contents(`${baseDir}${path}`));
};

export const getTrack = (params: Params): Track | undefined => {
  const tape = getTape(params);

  const track = tape.items.find((track: Track) => {
    return params.track === track.slug;
  });

  if (track) {
    track.path = `${tapePath(params)}/${params.track}`;
    track.tape = { title: `${tape.date} ${tape.title}` };
  }

  return track;
};
