import Uuniq from "../../src";

const Symbolic = new Uuniq.Symbolic();

const id_0 = Symbolic.generate();
const id_1 = Symbolic.generate();
const resolve_0 = Symbolic.resolve(id_0);
const resolve_1 = Symbolic.resolve(id_1);

console.log(id_0, JSON.stringify(resolve_0));
console.log(id_1, JSON.stringify(resolve_1));

if (id_0 !== id_1 && resolve_0.sequence === resolve_1.sequence) throw new Error("❌ [Sequence]");

console.log("✅ [Sequence] Checks successful!");