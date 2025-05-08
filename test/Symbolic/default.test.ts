import { Symbolic, Interfaces } from "../../src/main";

const SymbolicIDs: Symbolic = new Symbolic();

const id: string = SymbolicIDs.generate();
const resolve: Interfaces.SymbolicResolve = SymbolicIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error("❌ [Default]");

console.log("✅ [Default] Checks successful!");