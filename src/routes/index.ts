import { getYears } from "../utils/api";
import type { RequestHandler } from "./__types";

export const GET: RequestHandler = () => {
  return {
    body: {
      years: getYears,
    },
  };
};
