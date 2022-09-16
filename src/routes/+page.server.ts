import { getYears } from "~/utils/api";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    years: getYears,
  };
};
