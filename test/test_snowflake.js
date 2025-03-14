const Uuniq = require("../main.js");

const Snowflake = new Uuniq.Snowflake();

console.log("\n".repeat(50));

const generate = () => {
  let id = Snowflake.generate();

  console.log(id, JSON.stringify(Snowflake.resolve(id)));
};

setInterval(() => {
  console.log("\n".repeat(1));

  for (let i = 0; i < 5; i++) generate();
}, 1000);