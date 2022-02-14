import type { RequestHandler } from "@sveltejs/kit";
import { getTapes } from "~/utils/api";

export const get: RequestHandler = async ({ params }) => {
  return {
    body: {
      tapes: getTapes(Number(params.year)),
    },
  };
};
