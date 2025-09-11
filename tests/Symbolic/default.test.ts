import { Symbolic, type SymbolicResolve } from "../../src/main";

const SymbolicIDs: Symbolic = new Symbolic();

const id: string = SymbolicIDs.generate();
const resolve: SymbolicResolve = SymbolicIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error("❌ Error");

console.log("✅ Success");
