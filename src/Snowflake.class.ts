import type { Limits } from "./types/Limits.type";
import type { Parts } from "./types/Parts.type";
import type { Shifts } from "./types/Shifts.type";
import type { SnowflakeOptions } from "./types/SnowflakeOptions.type";
import type { SnowflakeResolve } from "./types/SnowflakeResolve.type";

const parts: Parts = {
  timestamp: 53,
  place_id: 4,
  sequence: 10
};

const calculateLimits = (parts: Parts): Limits => {
  const limits: Limits = {} as Limits;
  const keys: (keyof Parts)[] = Object.keys(parts) as (keyof Parts)[];

  for (const key of keys) limits[key] = Math.pow(2, parts[key]) - 1;

  return limits;
};

const calculateShifts = (parts: Parts): Shifts => {
  const shifts: Shifts = {} as Shifts;
  let shift: number = 0;

  const keys: (keyof Parts)[] = ["sequence", "place_id", "timestamp"];

  for (const key of keys) {
    shifts[key] = shift;
    shift += parts[key];
  }

  return shifts;
};

const limits: Limits = calculateLimits(parts);
const shifts: Shifts = calculateShifts(parts);

export class Snowflake {
  private readonly epoch: number;
  private readonly place_id: number;
  private sequence: number;
  private last_timestamp: number;

  public constructor(
    options: SnowflakeOptions = {
      epoch: "2025-01-01T00:00:00.000Z",
      place_id: 0
    }
  ) {
    this.epoch = options.epoch instanceof Date ? options.epoch.getTime() : typeof options.epoch === "string" || typeof options.epoch === "number" ? new Date(options.epoch).getTime() : new Date("2025-01-01T00:00:00.000Z").getTime();
    this.place_id = options.place_id ?? 0;

    if (this.place_id < 0 || this.place_id > limits.place_id) throw new Error(`Field place_id must be between 0 and ${limits.place_id}`);

    this.place_id = this.place_id & limits.place_id;
    this.sequence = 0;
    this.last_timestamp = -1;
  }

  private currentTimestamp(): number {
    return Date.now() - this.epoch;
  }

  private waitForNextTime(last_timestamp: number): number {
    let timestamp: number = this.currentTimestamp();

    while (last_timestamp >= timestamp) timestamp = this.currentTimestamp();

    return timestamp;
  }

  public generate(): string {
    let timestamp: number = this.currentTimestamp();

    if (timestamp < this.last_timestamp) throw new Error("Clock moved backwards.");

    if (timestamp === this.last_timestamp) {
      this.sequence = (this.sequence + 1) & limits.sequence;

      if (this.sequence === 0) timestamp = this.waitForNextTime(this.last_timestamp);
    } else this.sequence = 0;

    this.last_timestamp = timestamp;

    return ((BigInt(timestamp) << BigInt(shifts.timestamp)) | (BigInt(this.place_id) << BigInt(shifts.place_id)) | BigInt(this.sequence)).toString();
  }

  public resolve(id: string): SnowflakeResolve {
    const bigint_id: bigint = BigInt(id);

    return {
      created_at: new Date(this.epoch + Number((bigint_id >> BigInt(shifts.timestamp)) & BigInt(limits.timestamp))).toISOString(),
      place_id: Number((bigint_id >> BigInt(shifts.place_id)) & BigInt(limits.place_id)),
      sequence: Number(bigint_id & BigInt(limits.sequence))
    };
  }
}
