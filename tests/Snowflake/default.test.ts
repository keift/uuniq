import { Snowflake, type Types as UuniqTypes } from "../../src/main";

const SnowflakeIDs: Snowflake = new Snowflake();

const id: string = SnowflakeIDs.generate();
const resolve: UuniqTypes.SnowflakeResolve = SnowflakeIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error("❌ Error");

console.log("✅ Success");
