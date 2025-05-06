import Uuniq from "../../src/main";

const Snowflake = new Uuniq.Snowflake({
  place_id: 1
});

const id = Snowflake.generate();
const resolve = Snowflake.resolve(id);

console.log(id, JSON.stringify(resolve));

if (resolve.place_id !== 1) throw new Error("❌ [Place ID]");

console.log("✅ [Place ID] Checks successful!");