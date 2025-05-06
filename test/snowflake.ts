import Uuniq from "../dist/main.mjs";

// Epoch
const Snowflake_1 = new Uuniq.Snowflake({
  epoch: "2007-05-05"
})

const Snowflake_1_generate_1 = Snowflake_1.generate();
const Snowflake_1_resolve_1 = Snowflake_1.resolve(Snowflake_1_generate_1);

console.log(Snowflake_1_generate_1, JSON.stringify(Snowflake_1_resolve_1));

if (new Date(Snowflake_1_resolve_1.created_at).getDate() !== new Date().getDate()) throw new Error("Bro comes from the future.");

console.log("✅ Epoch Test: Checks successful!\n");

// Place
const Snowflake_2 = new Uuniq.Snowflake({
  place_id: 1
})

const Snowflake_2_generate_1 = Snowflake_2.generate();
const Snowflake_2_resolve_1 = Snowflake_2.resolve(Snowflake_2_generate_1);

console.log(Snowflake_2_generate_1, JSON.stringify(Snowflake_2_resolve_1));

if (Snowflake_2_resolve_1.place_id !== 1) throw new Error("Which place are you in?");

console.log("✅ Place Test: Checks successful!\n");

// Sequence
const Snowflake_3 = new Uuniq.Snowflake();

const Snowflake_3_generate_1 = Snowflake_3.generate();
const Snowflake_3_generate_2 = Snowflake_3.generate();
const Snowflake_3_resolve_1 = Snowflake_3.resolve(Snowflake_3_generate_1);
const Snowflake_3_resolve_2 = Snowflake_3.resolve(Snowflake_3_generate_2);

console.log(Snowflake_3_generate_1, JSON.stringify(Snowflake_3_resolve_1));
console.log(Snowflake_3_generate_2, JSON.stringify(Snowflake_3_resolve_2));

if (Snowflake_3_generate_1 !== Snowflake_3_generate_2 && Snowflake_3_resolve_1.sequence === Snowflake_3_resolve_2.sequence) throw new Error("Wtf, its same!");

console.log("✅ Sequence Test: Checks successful!\n");

// Difference
const Snowflake_4 = new Uuniq.Snowflake();

const Snowflake_4_resolve_1 = Snowflake_4.resolve("102604921389056");

console.log(Snowflake_4_resolve_1);

if (Snowflake_4_resolve_1.created_at !== "2025-03-14T11:35:07.409Z") throw new Error("However, many things have changed...");

console.log("✅ Difference Test: Checks successful!");