// 10952
var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split('\n');
for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(t => +t);
  if (a !== 0 && b !== 0) {
    console.log(a + b);
  } else return;
}