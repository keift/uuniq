import { Uuniq } from "../../src";

const Snowflake = new Uuniq.Snowflake();

const resolve = Snowflake.resolve("102604921389056");

console.log(JSON.stringify(resolve));

if (resolve.created_at !== "2025-03-14T11:35:07.409Z") throw new Error("❌ [Difference]");

console.log("✅ [Difference] Checks successful!");