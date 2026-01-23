import type { SnowflakeParts } from './SnowflakeParts.type';

export type SnowflakeShifts = {
  [Key in keyof SnowflakeParts]: number;
};
