import type { SnowflakeParts } from './snowflake_parts';

export type SnowflakeLimits = {
  [Key in keyof SnowflakeParts]: bigint;
};
