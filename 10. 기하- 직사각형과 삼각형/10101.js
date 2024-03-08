const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
let same = {};
let sum = 0;
let ans = '';
input.forEach(i => {
  sum += i;
  same[i] = (same[i] || 0) + 1;
});
if (sum === 180) {
  for (let k in same) {
    if (same[k] === 3) {
      ans = 'Equilateral';
      break;
    } else if (same[k] === 2) {
      ans = 'Isosceles';
      break;
    } else {
      ans = 'Scalene';
    }
  }
} else {
  ans = 'Error';
}
console.log(ans);
