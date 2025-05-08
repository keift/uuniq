import type { Parts } from "./Parts";

export type Limits = {
  [Key in keyof Parts]: number;
};