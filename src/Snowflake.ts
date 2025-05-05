type Parts = {
  timestamp: number;
  place_id: number;
  sequence: number;
};

type Limits = {
  [K in keyof Parts]: number;
};

type Shifts = {
  [K in keyof Parts]: number;
};

type Options = {
  epoch?: string | number | Date;
  place_id?: number;
};

const parts: Parts = {
  timestamp: 53,
  place_id: 4,
  sequence: 10
};

const calculateLimits = (parts: Parts): Limits => {
  const limits = {} as Limits;

  for (const field in parts) {
    const key = field as keyof Parts;

    limits[key] = Math.pow(2, parts[key]);
  }

  return limits;
};

const calculateShifts = (parts: Parts): Shifts => {
  const shifts = {} as Shifts;
  let shift = 0;

  const keys = Object.keys(parts).reverse() as (keyof Parts)[];

  for (const key of keys) {
    shifts[key] = shift;
    shift += parts[key];
  }

  return shifts;
};

const limits = calculateLimits(parts);
const shifts = calculateShifts(parts);

export default class Snowflake {
  private _epoch: number;
  private _place_id: number;
  private _sequence: number;
  private _last_timestamp: number;

  constructor(Options: Options) {
    Options = {
      epoch: new Date("2025-01-01T00:00:00.000Z").getTime(),
      place_id: 0,

      ...Options
    }

    const place_id = Options.place_id ?? 0;

    if (place_id < 0 || place_id > limits.place_id) throw new Error(`Field place_id must be between 0 and ${limits.place_id}`);

    if (Options.epoch instanceof Date) {
      this._epoch = Options.epoch.getTime();
    } else if (typeof Options.epoch === "string" || typeof Options.epoch === "number") {
      this._epoch = new Date(Options.epoch).getTime();
    } else this._epoch = new Date("2025-01-01T00:00:00.000Z").getTime();

    this._place_id = place_id & limits.place_id;
    this._sequence = 0;
    this._last_timestamp = -1;
  }

  private _currentTimestamp(): number {
    return Date.now() - this._epoch;
  }

  private _waitForNextTime(last_timestamp: number): number {
    let timestamp = this._currentTimestamp();

    while (last_timestamp >= timestamp) timestamp = this._currentTimestamp();

    return timestamp;
  }

  public generate(): string {
    let timestamp = this._currentTimestamp();

    if (timestamp < this._last_timestamp) throw new Error("Clock moved backwards");

    if (timestamp === this._last_timestamp) {
      this._sequence = (this._sequence + 1) & limits.sequence;

      if (this._sequence === 0) timestamp = this._waitForNextTime(this._last_timestamp);
    } else this._sequence = 0;

    this._last_timestamp = timestamp;

    return (
      (BigInt(timestamp) << BigInt(shifts.timestamp)) |
      (BigInt(this._place_id) << BigInt(shifts.place_id)) |
      BigInt(this._sequence)
    ).toString()
  }

  public resolve(id: string | bigint) {
    const bigint_id = BigInt(id);

    return {
      created_at: new Date(
        this._epoch + Number((bigint_id >> BigInt(shifts.timestamp)) & BigInt(limits.timestamp))
      ).toISOString(),
      place_id: Number((bigint_id >> BigInt(shifts.place_id)) & BigInt(limits.place_id)),
      sequence: Number(bigint_id & BigInt(limits.sequence))
    }
  }
};