const fs = require('fs');
var input = require('fs').readFileSync('./input.txt').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);
