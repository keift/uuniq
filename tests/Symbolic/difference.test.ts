import { Symbolic } from "../../src/main";

const SymbolicIDs = new Symbolic();

const resolve = SymbolicIDs.resolve("T8Qu56ki");

console.log(JSON.stringify(resolve));

if (resolve.created_at !== "2025-03-14T11:36:05.528Z") throw new Error("❌ Error");

console.log("✅ Success");
