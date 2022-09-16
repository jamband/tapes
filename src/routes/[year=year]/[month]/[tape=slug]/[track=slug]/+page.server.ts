import { getTape, getTrack } from "~/utils/api";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
  const { date: tapeDate, title: tapeTitle } = getTape(params);

  return {
    tapeTitle: `${tapeDate} ${tapeTitle}`,
    track: getTrack(params),
  };
};
