import { Symbolic } from "../../src/main";

const SymbolicIDs: Symbolic = new Symbolic({ epoch: "2007-05-05" });

const id = SymbolicIDs.generate();
const resolve = SymbolicIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error("❌ Error");

console.log("✅ Success");
