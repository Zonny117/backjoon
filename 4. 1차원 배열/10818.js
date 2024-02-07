var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const arr = input[1].split(' ').map(t => +t);
const max = Math.max.apply(null, arr);
const min = Math.min.apply(null, arr);
console.log(`${min} ${max}`);