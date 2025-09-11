import { Snowflake, type SnowflakeOptions, type SnowflakeResolve } from "../../src/main";

const options: SnowflakeOptions = {
  place_id: 1
};

const SnowflakeIDs: Snowflake = new Snowflake(options);

const id: string = SnowflakeIDs.generate();
const resolve: SnowflakeResolve = SnowflakeIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (resolve.place_id !== 1) throw new Error("❌ Error");

console.log("✅ Success");
