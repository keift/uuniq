const { Worker, isMainThread, parentPort, workerData, threadId } = require("worker_threads");
const os = require("node:os");
const Uuniq = require("../main.js");

if (isMainThread) {
  const cpus = os.cpus().length;

  console.log("\n".repeat(50));

  for (let i = 0; i < cpus; i++) new Worker(__filename, {workerData: i});
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