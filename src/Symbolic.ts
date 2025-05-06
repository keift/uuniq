import Anybase from "any-base";
import Snowflake from "./Snowflake";

interface Options {
  epoch?: string | number | Date;
  place_id?: number;
  charset?: string;
};

interface Resolve {
  created_at: string;
  place_id: number;
  sequence: number;
};

class Symbolic {
  private _epoch: number;
  private _place_id: number;
  private _charset: string;

  private _Snowflake: Snowflake;
  private _encode: (value: string) => string;
  private _decode: (value: string) => string;

  constructor(Options: Options = {}) {
    this._epoch =
      Options.epoch instanceof Date
        ? Options.epoch.getTime()
        : typeof Options.epoch === "string" || typeof Options.epoch === "number"
          ? new Date(Options.epoch).getTime()
          : new Date("2025-01-01T00:00:00.000Z").getTime();
    this._place_id = Options.place_id ?? 0;
    this._charset = Options.charset ?? "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    this._Snowflake = new Snowflake({
      epoch: this._epoch,
      place_id: this._place_id,
    })

    this._encode = Anybase(Anybase.DEC, this._charset);
    this._decode = Anybase(this._charset, Anybase.DEC);
  }

  generate(): string {
    return this._encode(this._Snowflake.generate());
  }

  resolve(id: string): Resolve {
    return this._Snowflake.resolve(BigInt(this._decode(id)));
  }
};

export default Symbolic;