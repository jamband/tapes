import { getTape } from "~/utils/api";
import type { RequestHandler } from "./[tape].d";

export const get: RequestHandler = ({ params }) => {
  const tape = getTape(params);

  return {
    body: {
      title: `${tape.date} ${tape.title}`,
      tape,
      year: params.year || "",
    },
  };
};
