import { Symbolic, type Types as UuniqTypes } from "../../src/main";

const SymbolicOptions: UuniqTypes.SymbolicOptions = {
  place_id: 1
};

const SymbolicIDs: Symbolic = new Symbolic(SymbolicOptions);

const id: string = SymbolicIDs.generate();
const resolve: UuniqTypes.SymbolicResolve = SymbolicIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (resolve.place_id !== 1) throw new Error("❌ [Place ID]");

console.log("✅ [Place ID] Checks successful!");