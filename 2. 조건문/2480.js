// 예외 상황을 만들어선 안된다. 일어날 수 있는 모든 상황의 조건을 짜야됨.
var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);
if (a === b && a === c && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b && a !== c) {
  console.log(1000 + a * 100);
} else if (a !== b && b === c) {
  console.log(1000 + b * 100);
} else if (a === c && b !== c) {
  console.log(1000 + a * 100);
} else {
  var max = Math.max(a, b, c);
  console.log(max * 100);
}
