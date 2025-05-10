import { Snowflake, type Types as UuniqTypes } from "../../src/main";

const SnowflakeIDs: Snowflake = new Snowflake();

const id_0: string = SnowflakeIDs.generate();
const id_1: string = SnowflakeIDs.generate();
const resolve_0: UuniqTypes.SnowflakeResolve = SnowflakeIDs.resolve(id_0);
const resolve_1: UuniqTypes.SnowflakeResolve = SnowflakeIDs.resolve(id_1);

console.log(id_0, JSON.stringify(resolve_0));
console.log(id_1, JSON.stringify(resolve_1));

if (resolve_0.created_at === resolve_1.created_at && resolve_0.sequence === resolve_1.sequence) throw new Error("❌ [Sequence]");

console.log("✅ [Sequence] Checks successful!");