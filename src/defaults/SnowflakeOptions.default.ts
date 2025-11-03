import type { SnowflakeOptions } from '../types/SnowflakeOptions.type';

export const SnowflakeOptionsDefault: SnowflakeOptions = {
  format: 'numeric',
  charset: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  epoch: '2025-01-01T00:00:00.000Z',
  place_id: 0
};
