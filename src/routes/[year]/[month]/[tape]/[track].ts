import type { RequestHandler } from "@sveltejs/kit";
import type { Params } from "~/types/params";
import { getTape, getTrack } from "~/utils/api";

export const get: RequestHandler<Params> = ({ params }) => {
  const { date: tapeDate, title: tapeTitle } = getTape(params);

  return {
    body: {
      tapeTitle: `${tapeDate} ${tapeTitle}`,
      track: getTrack(params),
    },
  };
};
