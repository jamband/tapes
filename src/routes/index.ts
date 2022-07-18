import { getYears } from "../utils/api";
import type { RequestHandler } from "./__types/index.d";

export const GET: RequestHandler = () => {
  return {
    body: {
      years: getYears,
    },
  };
};
