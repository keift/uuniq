const Uuniq = require("../main.js");

const Symbolic = new Uuniq.Symbolic();

console.log("\n".repeat(50));

const generate = () => {
  let id = Symbolic.generate();

  console.log(id, Symbolic.resolve(id));
};

for (let i = 0; i < 5; i++) generate();

setInterval(() => {
  for (let i = 0; i < 1; i++) generate();
}, 1000);