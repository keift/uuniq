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
  private _Snowflake: Snowflake;
  private _encode: (value: number) => string;
  private _decode: (value: string) => number;

  constructor(Options: Options = {}) {
    Options = {
      epoch: new Date("2025-01-01T00:00:00.000Z").getTime(),
      place_id: 0,
      charset: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",

      ...Options
    }

    this._Snowflake = new Snowflake({
      epoch: Options.epoch,
      place_id: Options.place_id,
    })

    this._encode = Anybase(Anybase.DEC, Options.charset);
    this._decode = Anybase(Options.charset, Anybase.DEC);
  }

  generate(): string {
    return this._encode(Number(this._Snowflake.generate()));
  }

  resolve(id: string): Resolve {
    return this._Snowflake.resolve(BigInt(this._decode(id)));
  }
};

export default Symbolic;