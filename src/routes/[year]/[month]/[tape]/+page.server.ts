import { getTape } from "#/utils/api.ts";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const tape = await getTape(params);

  return {
    title: `${tape.date} ${tape.title}`,
    tape,
  };
};
