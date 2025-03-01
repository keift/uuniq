const Uuniq = require("../main.js");
const cluster = require("node:cluster");
const os = require("node:os");

var cpus = os.cpus().length;

if (cluster.isMaster) {
  console.log("\n".repeat(50));

  for (let i = 0; i < cpus; i++) cluster.fork();
} else {
  const Snowflake = new Uuniq.Snowflake();

  console.log("\n".repeat(50));

  const generate = () => {
    let id = Snowflake.generate();
  
    console.log(id, Snowflake.resolve(id));
  };
  
  for (let i = 0; i < 5; i++) generate();
  
  setInterval(() => {
    for (let i = 0; i < 1; i++) generate();
  }, 1000);
};