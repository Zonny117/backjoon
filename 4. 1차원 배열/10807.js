var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(t => +t);
const v = +input[2];
let count = 0;
for (let i = 0; i < n; i++) {
  arr[i] === v ? (count += 1) : null;
}
console.log(count);
