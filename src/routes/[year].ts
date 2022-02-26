import type { RequestHandler } from "@sveltejs/kit";
import type { Params } from "~/types/params";
import { getTapes } from "~/utils/api";

export const get: RequestHandler<Params> = ({ params }) => {
  return {
    body: {
      tapes: getTapes(Number(params.year)),
      title: `Tapes of ${params.year}`,
    },
  };
};
