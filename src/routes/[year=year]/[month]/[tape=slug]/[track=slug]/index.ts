import { getTape, getTrack } from "~/utils/api";
import type { RequestHandler } from "./index.d";

export const get: RequestHandler = ({ params }) => {
  const { date: tapeDate, title: tapeTitle } = getTape(params);

  return {
    body: {
      tapeTitle: `${tapeDate} ${tapeTitle}`,
      track: getTrack(params),
    },
  };
};
