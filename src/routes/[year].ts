import { getTapes } from "~/utils/api";
import type { RequestHandler } from "./[year].d";

export const get: RequestHandler = ({ params }) => {
  return {
    body: {
      tapes: getTapes(Number(params.year)),
      title: `Tapes of ${params.year}`,
    },
  };
};
