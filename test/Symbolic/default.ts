import Uuniq from "../../src/main";

const Symbolic = new Uuniq.Symbolic();

const id = Symbolic.generate();
const resolve = Symbolic.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error("❌ [Default]");

console.log("✅ [Default] Checks successful!");