var fs = require('fs');
var input = fs
  .readFileSync('./input.txt')
  .toString()
  .split(' ')
  .map(value => +value);
var n = input[0];
var ans = 0;
for (let i = 1; i <= n; i++) {
  ans += i;
}
console.log(ans);