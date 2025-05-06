import Uuniq from "../../src/main";

const Symbolic = new Uuniq.Symbolic({
  epoch: "2007-05-05"
});

const id = Symbolic.generate();
const resolve = Symbolic.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error("❌ [Epoch]");

console.log("✅ [Epoch] Checks successful!");