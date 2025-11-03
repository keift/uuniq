import type { IncrementOptions } from '../types/IncrementOptions.type';

export const IncrementOptionsDefault: IncrementOptions = {
  format: 'numeric',
  initial: 10000000,
  charset: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  place_id: 0,

  store: new Map()
};
