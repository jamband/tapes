import { getTapes } from "@/utils/api";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  return {
    tapes: await getTapes(Number(params.year)),
    title: `Tapes of ${params.year}`,
  };
};
