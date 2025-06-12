import { Uuniq } from "../../src/main";

const SnowflakeIDs: Uuniq.Snowflake = new Uuniq.Snowflake();

const id: string = SnowflakeIDs.generate();
const resolve: Uuniq.Types.SnowflakeResolve = SnowflakeIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error("❌ [Default]");

console.log("✅ [Default] Checks successful!");
