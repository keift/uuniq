import { Snowflake, Interfaces } from "../../src/main";

const SnowflakeIDs: Snowflake = new Snowflake({
  epoch: "2007-05-05"
});

const id: string = SnowflakeIDs.generate();
const resolve: Interfaces.SnowflakeResolve = SnowflakeIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error("❌ [Epoch]");

console.log("✅ [Epoch] Checks successful!");