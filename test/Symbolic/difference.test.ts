import { Symbolic, Interfaces } from "../../src/main";

const SymbolicIDs: Symbolic = new Symbolic();

const resolve: Interfaces.SymbolicResolve = SymbolicIDs.resolve("T8Qu56ki");

console.log(JSON.stringify(resolve));

if (resolve.created_at !== "2025-03-14T11:36:05.528Z") throw new Error("❌ [Difference]");

console.log("✅ [Difference] Checks successful!");