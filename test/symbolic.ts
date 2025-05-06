import Uuniq from "../dist/main.mjs";

// No Options
const Symbolic_0 = new Uuniq.Symbolic();

const Symbolic_0_generate_0 = Symbolic_0.generate();
const Symbolic_0_resolve_0 = Symbolic_0.resolve(Symbolic_0_generate_0);

console.log(Symbolic_0_generate_0, JSON.stringify(Symbolic_0_resolve_0));

if (new Date(Symbolic_0_resolve_0.created_at).getDate() !== new Date().getDate()) throw new Error("❌ [No Options]");

console.log("✅ [No Options] Checks successful!\n");

// Epoch
const Symbolic_1 = new Uuniq.Symbolic({
  epoch: "2007-05-05"
})

const Symbolic_1_generate_0 = Symbolic_1.generate();
const Symbolic_1_resolve_0 = Symbolic_1.resolve(Symbolic_1_generate_0);

console.log(Symbolic_1_generate_0, JSON.stringify(Symbolic_1_resolve_0));

if (new Date(Symbolic_1_resolve_0.created_at).getDate() !== new Date().getDate()) throw new Error("❌ [Epoch]");

console.log("✅ [Epoch] Checks successful!\n");

// Place
const Symbolic_2 = new Uuniq.Symbolic({
  place_id: 1
})

const Symbolic_2_generate_0 = Symbolic_2.generate();
const Symbolic_2_resolve_0 = Symbolic_2.resolve(Symbolic_2_generate_0);

console.log(Symbolic_2_generate_0, JSON.stringify(Symbolic_2_resolve_0));

if (Symbolic_2_resolve_0.place_id !== 1) throw new Error("❌ [Place]");

console.log("✅ [Place] Checks successful!\n");

// Sequence
const Symbolic_3 = new Uuniq.Symbolic();

const Symbolic_3_generate_0 = Symbolic_3.generate();
const Symbolic_3_generate_1 = Symbolic_3.generate();
const Symbolic_3_resolve_0 = Symbolic_3.resolve(Symbolic_3_generate_0);
const Symbolic_3_resolve_1 = Symbolic_3.resolve(Symbolic_3_generate_1);

console.log(Symbolic_3_generate_0, JSON.stringify(Symbolic_3_resolve_0));
console.log(Symbolic_3_generate_1, JSON.stringify(Symbolic_3_resolve_1));

if (Symbolic_3_generate_0 !== Symbolic_3_generate_1 && Symbolic_3_resolve_0.sequence === Symbolic_3_resolve_1.sequence) throw new Error("❌ [Sequence]");

console.log("✅ [Sequence] Checks successful!\n");

// Difference
const Symbolic_4 = new Uuniq.Symbolic();

const Symbolic_4_resolve_0 = Symbolic_4.resolve("T8Qu56ki");

console.log(Symbolic_4_resolve_0);

if (Symbolic_4_resolve_0.created_at !== "2025-03-14T11:36:05.528Z") throw new Error("❌ [Difference]");

console.log("✅ [Difference] Checks successful!");