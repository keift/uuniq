import { Symbolic, type Types as UuniqTypes } from "../../src/main";

const SymbolicOptions: UuniqTypes.SymbolicOptions = {
  epoch: "2007-05-05"
};

const SymbolicIDs: Symbolic = new Symbolic(SymbolicOptions);

const id: string = SymbolicIDs.generate();
const resolve: UuniqTypes.SymbolicResolve = SymbolicIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error("❌ [Epoch]");

console.log("✅ [Epoch] Checks successful!");