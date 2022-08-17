import { getTape } from "../../../../utils/api";
import type { RequestHandler } from "./__types";

export const GET: RequestHandler = ({ params }) => {
  const tape = getTape(params);

  return {
    body: {
      title: `${tape.date} ${tape.title}`,
      tape,
      year: params.year || "",
    },
  };
};
