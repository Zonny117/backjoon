// 제출시 /dev/stdin
var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split('\n');
var a = parseInt(input[0]);
var b = input[1];
var split = b.split('');
console.log(a * parseInt(split[2]));
console.log(a * parseInt(split[1]));
console.log(a * parseInt(split[0]));
console.log(a * parseInt(b));
