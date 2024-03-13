// 25314
var fs = require('fs');
var input = fs
  .readFileSync('./input.txt')
  .toString()
  .split(' ')
  .map(value => +value);
var n = input[0];
var ans = '';
for (let i = 0; i < n / 4; i++) {
  ans += 'long ';
}
console.log(ans + 'int');