import type { Parts } from './Parts.type';

export type Limits = {
  [Key in keyof Parts]: bigint;
};
