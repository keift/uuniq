import Uuniq from "../dist/main.mjs";

// Epoch
const Symbolic_1 = new Uuniq.Symbolic({
  epoch: "2007-05-05"
})

const Symbolic_1_generate_1 = Symbolic_1.generate();
const Symbolic_1_resolve_1 = Symbolic_1.resolve(Symbolic_1_generate_1);

console.log(Symbolic_1_generate_1, JSON.stringify(Symbolic_1_resolve_1));

if (new Date(Symbolic_1_resolve_1.created_at).getDate() !== new Date().getDate()) throw new Error("Bro comes from the future.");

console.log("✅ Epoch Test: Checks successful!\n");

// Place
const Symbolic_2 = new Uuniq.Symbolic({
  place_id: 1
})

const Symbolic_2_generate_1 = Symbolic_2.generate();
const Symbolic_2_resolve_1 = Symbolic_2.resolve(Symbolic_2_generate_1);

console.log(Symbolic_2_generate_1, JSON.stringify(Symbolic_2_resolve_1));

if (Symbolic_2_resolve_1.place_id !== 1) throw new Error("Which place are you in?");

console.log("✅ Place Test: Checks successful!\n");

// Sequence
const Symbolic_3 = new Uuniq.Symbolic();

const Symbolic_3_generate_1 = Symbolic_3.generate();
const Symbolic_3_generate_2 = Symbolic_3.generate();
const Symbolic_3_resolve_1 = Symbolic_3.resolve(Symbolic_3_generate_1);
const Symbolic_3_resolve_2 = Symbolic_3.resolve(Symbolic_3_generate_2);

console.log(Symbolic_3_generate_1, JSON.stringify(Symbolic_3_resolve_1));
console.log(Symbolic_3_generate_2, JSON.stringify(Symbolic_3_resolve_2));

if (Symbolic_3_resolve_1.sequence === Symbolic_3_resolve_2.sequence) throw new Error("Wtf, its same!");

console.log("✅ Sequence Test: Checks successful!\n");

// Difference
const Symbolic_4 = new Uuniq.Symbolic();

const Symbolic_4_resolve_1 = Symbolic_4.resolve("T8Qu56ki");

console.log(Symbolic_4_resolve_1);

if (Symbolic_4_resolve_1.created_at !== "2025-03-14T11:36:05.528Z") throw new Error("However, many things have changed...");

console.log("✅ Difference Test: Checks successful!");