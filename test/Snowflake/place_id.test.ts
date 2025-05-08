import { Snowflake, Interfaces } from "../../src/main";

const SnowflakeIDs: Snowflake = new Snowflake({
  place_id: 1
});

const id: string = SnowflakeIDs.generate();
const resolve: Interfaces.SnowflakeResolve = SnowflakeIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (resolve.place_id !== 1) throw new Error("❌ [Place ID]");

console.log("✅ [Place ID] Checks successful!");