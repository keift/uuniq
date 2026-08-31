import type { IncrementOptions } from '../types/increment_options';

export const increment_options: IncrementOptions = {
  format: 'numeric',
  initial: 10000001,
  charset: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  place_id: 0,

  store: new Map()
};
