const { cpus } = require('node:os');

const numCPUs = cpus().length;
console.log(numCPUs)