import type { RequestHandler } from "@sveltejs/kit";
import type { Params } from "~/types/params";
import { getTape } from "~/utils/api";

export const get: RequestHandler<Params> = ({ params }) => {
  const tape = getTape(params);

  return {
    body: {
      title: `${tape.date} ${tape.title}`,
      tape,
      year: params.year || "",
    },
  };
};
