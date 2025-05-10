import { Snowflake, type Types as UuniqTypes } from "../../src/main";

const SnowflakeOptions: UuniqTypes.SnowflakeOptions = {
  epoch: "2007-05-05"
};

const SnowflakeIDs: Snowflake = new Snowflake(SnowflakeOptions);

const id: string = SnowflakeIDs.generate();
const resolve: UuniqTypes.SnowflakeResolve = SnowflakeIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error("❌ [Epoch]");

console.log("✅ [Epoch] Checks successful!");