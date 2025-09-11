import { Snowflake, type SnowflakeResolve } from "../../src/main";

const SnowflakeIDs: Snowflake = new Snowflake();

const id_0: string = SnowflakeIDs.generate();
const id_1: string = SnowflakeIDs.generate();
const resolve_0: SnowflakeResolve = SnowflakeIDs.resolve(id_0);
const resolve_1: SnowflakeResolve = SnowflakeIDs.resolve(id_1);

console.log(id_0, JSON.stringify(resolve_0));
console.log(id_1, JSON.stringify(resolve_1));

if (resolve_0.created_at === resolve_1.created_at && resolve_0.sequence === resolve_1.sequence) throw new Error("❌ Error");

console.log("✅ Success");
