import type { SnowflakeParts } from './snowflake_parts';

export type SnowflakeShifts = {
  [Key in keyof SnowflakeParts]: number;
};
