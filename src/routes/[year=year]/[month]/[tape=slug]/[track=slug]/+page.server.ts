import { getTape, getTrack } from "@/utils/api";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const { date: tapeDate, title: tapeTitle } = await getTape(params);

  return {
    tapeTitle: `${tapeDate} ${tapeTitle}`,
    track: await getTrack(params),
  };
};
