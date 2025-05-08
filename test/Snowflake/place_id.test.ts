import { Snowflake, Types, Interfaces } from "../../src/main";

const SnowflakeOptions: Types.SnowflakeOptions = {
  place_id: 1
};

const SnowflakeIDs: Snowflake = new Snowflake(SnowflakeOptions);

const id: string = SnowflakeIDs.generate();
const resolve: Interfaces.SnowflakeResolve = SnowflakeIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (resolve.place_id !== 1) throw new Error("❌ [Place ID]");

console.log("✅ [Place ID] Checks successful!");