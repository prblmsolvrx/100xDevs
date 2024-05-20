"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
  makes node.js a multi-core systems which it's not
  multiple node.js systems in different terminals
  won't work localhost fails for thant we use cluster
  cluster modules helps to scale applications

  The cluster module in Node.js allows you to create
  child processes (workers) that share server ports.
  This enables better utilization of multi-core systems
  by allowing you to spawn multiple
  processes to handle incoming requests.

  no port conflict in this cluster approach
*/
const cluster_1 = __importDefault(require("cluster"));
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
const totalCPUs = os_1.default.cpus().length;
const port = 3000;
if (cluster_1.default.isPrimary) {
    console.log(`Number of CPUs is ${totalCPUs}`);
    console.log(`Primary ${process.pid} is running`);
    // Fork workers.
    for (let i = 0; i < totalCPUs; i++) {
        cluster_1.default.fork();
    }
    cluster_1.default.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log("Let's fork another worker!");
        cluster_1.default.fork();
    });
}
else {
    const app = (0, express_1.default)();
    console.log(`Worker ${process.pid} started`);
    app.get("/", (req, res) => {
        res.send("Hello World!");
    });
    app.get("/api/:n", function (req, res) {
        let n = parseInt(req.params.n);
        let count = 0;
        if (n > 5000000000)
            n = 5000000000;
        for (let i = 0; i <= n; i++) {
            count += i;
        }
        res.send(`Final count is ${count} ${process.pid}`);
    });
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });
}
