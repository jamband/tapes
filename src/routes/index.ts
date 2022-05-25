import { getYears } from "~/utils/api";
import type { RequestHandler } from "./__types/index.d";

export const get: RequestHandler = () => {
  return {
    body: {
      years: getYears,
    },
  };
};
