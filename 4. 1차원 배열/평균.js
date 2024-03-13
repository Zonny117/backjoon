// 1546
var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const n = +input[0];
const score = input[1].split(' ').map(Number);
const max = Math.max(...score);
let sum = 0;
score.forEach(i => {
  let fake = (i / max) * 100;
  sum += fake;
});
console.log(sum / n);