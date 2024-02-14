const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
// 기준 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개
const set = [1, 1, 2, 2, 2, 8];
let ans = [];
set.forEach((i, idx) => {
  ans.push(i - input[idx]);
});
console.log(ans.join(' '));
