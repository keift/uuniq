import Anybase from "any-base";

import { Snowflake } from "./Snowflake.class";

import type { SymbolicOptions, SymbolicResolve } from "./types/main.type";

export class Symbolic {
  private readonly epoch: number;
  private readonly place_id: number;
  private readonly charset: string;

  private readonly Snowflake: Snowflake;
  private readonly encode: (anybase: string) => string;
  private readonly decode: (anybase: string) => string;

  public constructor(
    options: SymbolicOptions = {
      epoch: "2025-01-01T00:00:00.000Z",
      place_id: 0,
      charset: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    }
  ) {
    this.epoch = options.epoch instanceof Date ? options.epoch.getTime() : typeof options.epoch === "string" || typeof options.epoch === "number" ? new Date(options.epoch).getTime() : new Date("2025-01-01T00:00:00.000Z").getTime();
    this.place_id = options.place_id ?? 0;
    this.charset = options.charset ?? "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    this.Snowflake = new Snowflake({
      epoch: this.epoch,
      place_id: this.place_id
    });

    this.encode = Anybase(Anybase.DEC, this.charset);
    this.decode = Anybase(this.charset, Anybase.DEC);
  }

  public generate(): string {
    return this.encode(this.Snowflake.generate());
  }

  public resolve(id: string): SymbolicResolve {
    return this.Snowflake.resolve(this.decode(id));
  }
}
