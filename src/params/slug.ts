import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (param) => {
  return /^[\w-]+$/.test(param);
};
