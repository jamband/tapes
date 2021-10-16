import type { Params } from "~/types/params";
import type { Tape, Tapes } from "~/types/tape";
import type { Track } from "~/types/track";
import fs from "fs";
import glob from "glob";
import { join } from "path";

const baseDir = join(process.cwd(), "src/tapes");
const files = glob.sync(`${baseDir}/**/*.json`);

const contents = (path: string) => {
  return fs.readFileSync(path, "utf8");
};

const tapePath = (params: Params) => {
  return `/${params.year}/${params.month}/${params.tape}`;
};

export const getTapes = (): Tapes => {
  const tapes = files.map((file) => {
    const { id, title, path, date }: Tape = JSON.parse(contents(file));
    return { id, title, path, date };
  });

  return tapes.sort((tape1, tape2) => {
    return tape1.id > tape2.id ? -1 : 1;
  });
};

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
