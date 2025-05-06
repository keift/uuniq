import Uuniq from "../../src";

const Snowflake = new Uuniq.Snowflake({
  epoch: "2007-05-05"
});

const id = Snowflake.generate();
const resolve = Snowflake.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error("❌ [Epoch]");

console.log("✅ [Epoch] Checks successful!");