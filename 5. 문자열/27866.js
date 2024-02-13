var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const str = input[0];
const i = +input[1];
const ans = str.charAt(i - 1);
console.log(ans);