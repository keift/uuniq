import merge from 'lodash.merge';

import { SnowflakeOptionsDefault } from './defaults/SnowflakeOptions.default';

import type { Limits } from './types/Limits.type';
import type { Parts } from './types/Parts.type';
import type { Shifts } from './types/Shifts.type';
import type { SnowflakeOptions } from './types/SnowflakeOptions.type';
import type { SnowflakeResolve } from './types/SnowflakeResolve.type';

const parts: Parts = {
  timestamp: 53,
  place_id: 4,
  sequence: 10
};

const calculateLimits = (parts: Parts): Limits => {
  const limits = {} as Limits;
  const keys: (keyof Parts)[] = ['sequence', 'place_id', 'timestamp'];

  for (const key of keys) limits[key] = (BigInt(1) << BigInt(parts[key])) - BigInt(1);

  return limits;
};

const calculateShifts = (parts: Parts): Shifts => {
  const shifts = {} as Shifts;
  const keys: (keyof Parts)[] = ['sequence', 'place_id', 'timestamp'];

  let shift = 0;

  for (const key of keys) {
    shifts[key] = shift;
    shift += parts[key];
  }

  return shifts;
};

const limits = calculateLimits(parts);
const shifts = calculateShifts(parts);

export class Snowflake {
  private readonly options: SnowflakeOptions;
  private readonly epoch: number;
  private sequence: number;
  private last_timestamp: number;

  public constructor(options: SnowflakeOptions = SnowflakeOptionsDefault) {
    this.options = merge({}, SnowflakeOptionsDefault, options);

    this.epoch = new Date(this.options.epoch ?? '').getTime();

    if ((this.options.place_id ?? 0) < 0 || (this.options.place_id ?? 0) > limits.place_id) throw new Error(`Field place_id must be between 0 and ${limits.place_id.toString()}`);

    this.options.place_id = (this.options.place_id ?? 0) & Number(limits.place_id);
    this.sequence = 0;
    this.last_timestamp = -1;
  }

  private currentTimestamp() {
    return Date.now() - this.epoch;
  }

  private waitForNextTime(last_timestamp: number) {
    let current_timestamp = this.currentTimestamp();

    while (last_timestamp >= current_timestamp) current_timestamp = this.currentTimestamp();

    return current_timestamp;
  }

  public generate() {
    let current_timestamp = this.currentTimestamp();

    if (current_timestamp < this.last_timestamp) throw new Error('Clock moved backwards.');

    if (current_timestamp === this.last_timestamp) {
      this.sequence = (this.sequence + 1) & Number(limits.sequence);

      if (this.sequence === 0) current_timestamp = this.waitForNextTime(this.last_timestamp);
    } else this.sequence = 0;

    this.last_timestamp = current_timestamp;

    return ((BigInt(current_timestamp) << BigInt(shifts.timestamp)) | (BigInt(this.options.place_id ?? 0) << BigInt(shifts.place_id)) | BigInt(this.sequence)).toString();
  }

  public resolve(id: string): SnowflakeResolve {
    const bigint_id = BigInt(id);

    return {
      created_at: new Date(this.epoch + Number((bigint_id >> BigInt(shifts.timestamp)) & limits.timestamp)).toISOString(),
      place_id: Number((bigint_id >> BigInt(shifts.place_id)) & limits.place_id),
      sequence: Number(bigint_id & limits.sequence)
    };
  }
}
