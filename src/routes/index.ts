import type { RequestHandler } from "@sveltejs/kit";
import { getYears } from "~/utils/api";

export const get: RequestHandler = async () => {
  return {
    body: {
      years: getYears,
    },
  };
};
