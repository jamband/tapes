import { getYears } from "~/utils/api";
import type { RequestHandler } from "./index.d";

export const get: RequestHandler = () => {
  return {
    body: {
      years: getYears,
    },
  };
};
