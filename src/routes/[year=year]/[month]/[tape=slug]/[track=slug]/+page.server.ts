import { getTrack } from "@/utils/api";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  return {
    track: await getTrack(params),
  };
};
