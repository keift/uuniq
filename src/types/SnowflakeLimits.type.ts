import type { SnowflakeParts } from './SnowflakeParts.type';

export type SnowflakeLimits = {
  [Key in keyof SnowflakeParts]: bigint;
};
