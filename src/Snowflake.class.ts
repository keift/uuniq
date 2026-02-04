import Anybase from 'any-base';
import merge from 'lodash.merge';

import { SnowflakeOptionsDefault } from './defaults/SnowflakeOptions.default';

import type { SnowflakeLimits } from './types/SnowflakeLimits.type';
import type { SnowflakeOptions } from './types/SnowflakeOptions.type';
import type { SnowflakeParts } from './types/SnowflakeParts.type';
import type { SnowflakeResolve } from './types/SnowflakeResolve.type';
import type { SnowflakeShifts } from './types/SnowflakeShifts.type';

const parts: SnowflakeParts = {
  timestamp: 53,
  place_id: 4,
  sequence: 10
};

const calculateLimits = (parts: SnowflakeParts): SnowflakeLimits => {
  const limits = {} as SnowflakeLimits;
  const keys: (keyof SnowflakeParts)[] = ['sequence', 'place_id', 'timestamp'];

  for (const key of keys) limits[key] = (BigInt(1) << BigInt(parts[key])) - BigInt(1);

  return limits;
};

const calculateShifts = (parts: SnowflakeParts): SnowflakeShifts => {
  const shifts = {} as SnowflakeShifts;
  const keys: (keyof SnowflakeParts)[] = ['sequence', 'place_id', 'timestamp'];

  let shift = 0;

  for (const key of keys) {
    shifts[key] = shift;
    shift += parts[key];
  }

  return shifts;
};

const limits = calculateLimits(parts);
const shifts = calculateShifts(parts);

const place_ids_used = new Set<number>();

export class Snowflake {
  private readonly options: SnowflakeOptions;
  private readonly epoch: number;
  private sequence: number;
  private last_timestamp: number;
  private readonly anybase_encode: (anybase: string) => string;
  private readonly anybase_decode: (anybase: string) => string;

  public constructor(options: SnowflakeOptions = SnowflakeOptionsDefault) {
    this.options = merge({}, SnowflakeOptionsDefault, options);

    this.epoch = new Date(this.options.epoch ?? '').getTime();

    if ((this.options.place_id ?? 0) < 0 || (this.options.place_id ?? 0) > limits.place_id) throw new Error(`Field place_id must be between 0 and ${String(limits.place_id)}`);

    this.options.place_id = (this.options.place_id ?? 0) & Number(limits.place_id);

    if (place_ids_used.has(this.options.place_id)) throw new Error(`Place ID ${String(this.options.place_id)} already in use`);

    place_ids_used.add(this.options.place_id);

    this.sequence = 0;
    this.last_timestamp = -1;

    this.anybase_encode = Anybase(Anybase.DEC, this.options.charset ?? '');
    this.anybase_decode = Anybase(this.options.charset ?? '', Anybase.DEC);
  }

  private currentTimestamp() {
    return Date.now() - this.epoch;
  }

  private waitForNextTime(last_timestamp: number) {
    let current_timestamp = this.currentTimestamp();

    while (last_timestamp >= current_timestamp) current_timestamp = this.currentTimestamp();

    return current_timestamp;
  }

  public generate(): string {
    let current_timestamp = this.currentTimestamp();

    if (current_timestamp < this.last_timestamp) throw new Error('Clock moved backwards');

    if (current_timestamp === this.last_timestamp) {
      this.sequence = (this.sequence + 1) & Number(limits.sequence);

      if (this.sequence === 0) current_timestamp = this.waitForNextTime(this.last_timestamp);
    } else this.sequence = 0;

    this.last_timestamp = current_timestamp;

    let id = String((BigInt(current_timestamp) << BigInt(shifts.timestamp)) | (BigInt(this.options.place_id ?? 0) << BigInt(shifts.place_id)) | BigInt(this.sequence));

    if (this.options.format === 'symbolic') id = this.anybase_encode(id);

    return id;
  }

  public resolve(id: string): SnowflakeResolve {
    if (this.options.format === 'symbolic') id = this.anybase_decode(id);

    const bigint_id = BigInt(id);

    return {
      created_at: new Date(this.epoch + Number((bigint_id >> BigInt(shifts.timestamp)) & limits.timestamp)).toISOString(),
      place_id: Number((bigint_id >> BigInt(shifts.place_id)) & limits.place_id),
      sequence: Number(bigint_id & limits.sequence)
    };
  }
}
