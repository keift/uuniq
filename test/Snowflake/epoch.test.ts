import { Snowflake } from "../../src/main";

import type { Types } from "../../src/main";

const SnowflakeOptions: Types.SnowflakeOptions = {
  epoch: "2007-05-05"
};

const SnowflakeIDs: Snowflake = new Snowflake(SnowflakeOptions);

const id: string = SnowflakeIDs.generate();
const resolve: Types.SnowflakeResolve = SnowflakeIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error("❌ [Epoch]");

console.log("✅ [Epoch] Checks successful!");