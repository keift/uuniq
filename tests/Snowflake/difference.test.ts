import { Snowflake, type SnowflakeResolve } from "../../src/main";

const SnowflakeIDs: Snowflake = new Snowflake();

const resolve: SnowflakeResolve = SnowflakeIDs.resolve("102604921389056");

console.log(JSON.stringify(resolve));

if (resolve.created_at !== "2025-03-14T11:35:07.409Z") throw new Error("❌ Error");

console.log("✅ Success");
