import { getTapes } from "@/utils/api";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
  return {
    tapes: getTapes(Number(params.year)),
    title: `Tapes of ${params.year}`,
  };
};
