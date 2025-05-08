import { Symbolic, Interfaces } from "../../src/main";

const SymbolicIDs: Symbolic = new Symbolic({
  place_id: 1
});

const id: string = SymbolicIDs.generate();
const resolve: Interfaces.SymbolicResolve = SymbolicIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (resolve.place_id !== 1) throw new Error("❌ [Place ID]");

console.log("✅ [Place ID] Checks successful!");