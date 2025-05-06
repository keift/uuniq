import type { Parts } from "./Parts";

export type Shifts = {
  [K in keyof Parts]: number;
};