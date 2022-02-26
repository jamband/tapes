import type { RequestHandler } from "@sveltejs/kit";
import { getYears } from "~/utils/api";

export const get: RequestHandler = () => {
  return {
    body: {
      years: getYears,
    },
  };
};
