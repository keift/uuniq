import { Uuniq, Types } from "../../src";

const Snowflake = new Uuniq.Snowflake();

const id = Snowflake.generate();
const resolve: Types.SnowflakeResolve = Snowflake.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error("❌ [Default]");

console.log("✅ [Default] Checks successful!");