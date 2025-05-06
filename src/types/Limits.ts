import Parts from "./Parts";

export type Limits = {
  [K in keyof Parts]: number;
};