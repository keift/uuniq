import { Symbolic, type SymbolicOptions, type  SymbolicResolve} from "../../src/main";

const options: SymbolicOptions = {
  epoch: "2007-05-05"
};

const SymbolicIDs: Symbolic = new Symbolic(options);

const id: string = SymbolicIDs.generate();
const resolve: SymbolicResolve = SymbolicIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error("❌ Error");

console.log("✅ Success");
