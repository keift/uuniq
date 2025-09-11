import { Symbolic, type SymbolicOptions, type SymbolicResolve } from "../../src/main";

const options: SymbolicOptions = {
  place_id: 1
};

const SymbolicIDs: Symbolic = new Symbolic(options);

const id: string = SymbolicIDs.generate();
const resolve: SymbolicResolve = SymbolicIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (resolve.place_id !== 1) throw new Error("❌ Error");

console.log("✅ Success");
