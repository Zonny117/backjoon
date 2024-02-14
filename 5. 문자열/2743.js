var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().trim().split(' ');
console.log(input[0].length);