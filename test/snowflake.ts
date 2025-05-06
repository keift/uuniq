import Uuniq from "../src/main";

// No Options
const Snowflake_0 = new Uuniq.Snowflake();

const Snowflake_0_generate_0 = Snowflake_0.generate();
const Snowflake_0_resolve_0 = Snowflake_0.resolve(Snowflake_0_generate_0);

console.log(Snowflake_0_generate_0, JSON.stringify(Snowflake_0_resolve_0));

if (new Date(Snowflake_0_resolve_0.created_at).getDate() !== new Date().getDate()) throw new Error("❌ [No Options]");

console.log("✅ [No Options] Checks successful!\n");

// Epoch
const Snowflake_1 = new Uuniq.Snowflake({
  epoch: "2007-05-05"
})

const Snowflake_1_generate_0 = Snowflake_1.generate();
const Snowflake_1_resolve_0 = Snowflake_1.resolve(Snowflake_1_generate_0);

console.log(Snowflake_1_generate_0, JSON.stringify(Snowflake_1_resolve_0));

if (new Date(Snowflake_1_resolve_0.created_at).getDate() !== new Date().getDate()) throw new Error("❌ [Epoch]");

console.log("✅ [Epoch] Checks successful!\n");

// Place
const Snowflake_2 = new Uuniq.Snowflake({
  place_id: 1
})

const Snowflake_2_generate_0 = Snowflake_2.generate();
const Snowflake_2_resolve_0 = Snowflake_2.resolve(Snowflake_2_generate_0);

console.log(Snowflake_2_generate_0, JSON.stringify(Snowflake_2_resolve_0));

if (Snowflake_2_resolve_0.place_id !== 1) throw new Error("❌ [Place]");

console.log("✅ [Place] Checks successful!\n");

// Sequence
const Snowflake_3 = new Uuniq.Snowflake();

const Snowflake_3_generate_0 = Snowflake_3.generate();
const Snowflake_3_generate_1 = Snowflake_3.generate();
const Snowflake_3_resolve_0 = Snowflake_3.resolve(Snowflake_3_generate_0);
const Snowflake_3_resolve_1 = Snowflake_3.resolve(Snowflake_3_generate_1);

console.log(Snowflake_3_generate_0, JSON.stringify(Snowflake_3_resolve_0));
console.log(Snowflake_3_generate_1, JSON.stringify(Snowflake_3_resolve_1));

if (Snowflake_3_generate_0 !== Snowflake_3_generate_1 && Snowflake_3_resolve_0.sequence === Snowflake_3_resolve_1.sequence) throw new Error("❌ [Sequence]");

console.log("✅ [Sequence] Checks successful!\n");

// Difference
const Snowflake_4 = new Uuniq.Snowflake();

const Snowflake_4_resolve_0 = Snowflake_4.resolve("102604921389056");

console.log(JSON.stringify(Snowflake_4_resolve_0));

if (Snowflake_4_resolve_0.created_at !== "2025-03-14T11:35:07.409Z") throw new Error("❌ [Difference]");

console.log("✅ [Difference] Checks successful!");