const Uuniq = require("../main.js");

const Symbolic = new Uuniq.Symbolic();

console.log("\n".repeat(50));

const generate = () => {
  let id = Symbolic.generate();

  console.log(id, JSON.stringify(Symbolic.resolve(id)));
};

setInterval(() => {
  console.log("\n".repeat(1));

  for (let i = 0; i < 5; i++) generate();
}, 1000);