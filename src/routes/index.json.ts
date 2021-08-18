import { getTapes } from "$utils/api";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  return {
    body: getTapes(),
  };
};
