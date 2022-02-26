import type { RequestHandler } from "@sveltejs/kit";
import { getTrack } from "~/utils/api";

export const get: RequestHandler = async ({ params }) => {
  return {
    body: {
      track: getTrack(params),
    },
  };
};
