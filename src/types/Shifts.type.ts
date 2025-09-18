import type { Parts } from './Parts.type';

export type Shifts = {
  [Key in keyof Parts]: number;
};
