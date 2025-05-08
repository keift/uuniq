import type { Parts } from "./Parts";

export type Shifts = {
  [Key in keyof Parts]: number;
};