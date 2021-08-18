type Param = "year" | "month" | "tape" | "track";

export type Params = {
  [key in Param]?: string;
};
