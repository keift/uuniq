import Anybase from "any-base";
import _ from "lodash";

import { Snowflake } from "./Snowflake.class";

import type { SymbolicOptions } from "./types/SymbolicOptions.type";
import type { SymbolicResolve } from "./types/SymbolicResolve.type";

const SymbolicOptionsDefault: SymbolicOptions = {
  epoch: "2025-01-01T00:00:00.000Z",
  place_id: 0,
  charset: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
};

export class Symbolic {
  private readonly options: SymbolicOptions;
  private readonly epoch: number;

  private readonly Snowflake: Snowflake;
  private readonly encode: (anybase: string) => string;
  private readonly decode: (anybase: string) => string;

  public constructor(options: SymbolicOptions = SymbolicOptionsDefault) {
    this.options = _.merge({}, SymbolicOptionsDefault, options);

    this.epoch = this.options.epoch instanceof Date ? this.options.epoch.getTime() : typeof this.options.epoch === "string" || typeof this.options.epoch === "number" ? new Date(this.options.epoch).getTime() : new Date("2025-01-01T00:00:00.000Z").getTime();

    this.Snowflake = new Snowflake({
      epoch: this.epoch,
      place_id: this.options.place_id ?? 0
    });

    this.encode = Anybase(Anybase.DEC, this.options.charset ?? "");
    this.decode = Anybase(this.options.charset ?? "", Anybase.DEC);
  }

  public generate(): string {
    return this.encode(this.Snowflake.generate());
  }

  public resolve(id: string): SymbolicResolve {
    return this.Snowflake.resolve(this.decode(id));
  }
}
