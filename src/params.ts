import { defineParams } from "@sveltejs/kit/params";

export const params = defineParams({
  year: (param) => /^\d{4}$/.test(param),
  month: (param) => /^\d{2}$/.test(param),
  tape: (param) => /^[\w-]+$/.test(param),
  track: (param) => /^[\w-]+$/.test(param),
});
