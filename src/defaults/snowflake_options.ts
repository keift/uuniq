import type { SnowflakeOptions } from '../types/snowflake_options';

export const snowflake_options: SnowflakeOptions = {
  format: 'numeric',
  charset: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  epoch: '2025-01-01T00:00:00.000Z',
  place_id: 0
};
