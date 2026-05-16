import type { SnowflakeParts } from './snowflake-parts';

export type SnowflakeShifts = {
  [Key in keyof SnowflakeParts]: number;
};
