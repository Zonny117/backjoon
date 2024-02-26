const fs = require('fs');
const n = +fs.readFileSync('./input.txt').toString().trim();
console.log(n * 4);
