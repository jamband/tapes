import type { RequestHandler } from "@sveltejs/kit";
import { getTapes } from "~/utils/api";

export const get: RequestHandler = async () => {
  return {
    body: getTapes(),
  };
};
