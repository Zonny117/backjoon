const fs = require('fs');
const [a, b] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(v => Array.from(v));
function reverse(arr) {
  return parseInt(arr.reverse().join(''));
}
const max = Math.max(reverse(a), reverse(b));
console.log(max);
