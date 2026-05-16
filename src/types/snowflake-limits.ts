import type { SnowflakeParts } from './snowflake-parts';

export type SnowflakeLimits = {
  [Key in keyof SnowflakeParts]: bigint;
};
