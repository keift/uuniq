import Uuniq from "../../src/main";

const Symbolic = new Uuniq.Symbolic();

const resolve = Symbolic.resolve("T8Qu56ki");

console.log(JSON.stringify(resolve));

if (resolve.created_at !== "2025-03-14T11:36:05.528Z") throw new Error("❌ [Difference]");

console.log("✅ [Difference] Checks successful!");