import { Snowflake, type Types as UuniqTypes } from "../../src/main";

const SnowflakeOptions: UuniqTypes.SnowflakeOptions = {
  place_id: 1
};

const SnowflakeIDs: Snowflake = new Snowflake(SnowflakeOptions);

const id: string = SnowflakeIDs.generate();
const resolve: UuniqTypes.SnowflakeResolve = SnowflakeIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (resolve.place_id !== 1) throw new Error("❌ Error");

console.log("✅ Success");
