import { Symbolic, Types, Interfaces } from "../../src/main";

const SymbolicOptions: Types.SymbolicOptions = {
  epoch: "2007-05-05"
};

const SymbolicIDs: Symbolic = new Symbolic(SymbolicOptions);

const id: string = SymbolicIDs.generate();
const resolve: Interfaces.SymbolicResolve = SymbolicIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error("❌ [Epoch]");

console.log("✅ [Epoch] Checks successful!");