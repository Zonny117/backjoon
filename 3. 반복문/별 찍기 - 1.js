// 2438
var fs = require('fs');
var input = fs
  .readFileSync('./input.txt')
  .toString()
  .split(' ')
  .map(value => +value);
var n = input[0];
var ans = '';
for (let i = 0; i < n; i++) {
  ans += '*';
  console.log(ans);
}