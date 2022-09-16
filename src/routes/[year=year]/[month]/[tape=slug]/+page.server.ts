import { getTape } from "~/utils/api";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
  const tape = getTape(params);

  return {
    title: `${tape.date} ${tape.title}`,
    tape,
    year: params.year || "",
  };
};
