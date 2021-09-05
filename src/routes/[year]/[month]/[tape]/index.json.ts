import type { RequestHandler } from "@sveltejs/kit";
import { getTape } from "~/utils/api";

export const get: RequestHandler = async ({ params }) => {
  return {
    body: getTape(params),
  };
};
