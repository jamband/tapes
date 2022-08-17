import { getTapes } from "../../utils/api";
import type { RequestHandler } from "./__types";

export const GET: RequestHandler = ({ params }) => {
  return {
    body: {
      tapes: getTapes(Number(params.year)),
      title: `Tapes of ${params.year}`,
    },
  };
};
