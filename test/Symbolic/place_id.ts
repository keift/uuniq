import { Uuniq } from "../../src/main";

const Symbolic = new Uuniq.Symbolic({
  place_id: 1
});

const id = Symbolic.generate();
const resolve = Symbolic.resolve(id);

console.log(id, JSON.stringify(resolve));

if (resolve.place_id !== 1) throw new Error("❌ [Place ID]");

console.log("✅ [Place ID] Checks successful!");