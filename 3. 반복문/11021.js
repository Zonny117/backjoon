var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split('\n');
var t = parseInt(input[0]);
for (let i = 1; i <= t; i++) {
  const [a, b] = input[i].split(' ').map(i => +i);
  console.log(`Case #${i}: ${a + b}`);
}
