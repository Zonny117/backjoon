var fs = require('fs');
var input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
let arr = Array.from({ length: 30 }, (i, idx) => idx + 1);
const ans = input
  // concat은 배열 두개를 합치는 함수
  .concat(arr)
  // i 값을 포함하지 않은 배열 리턴
  .filter(i => !input.includes(i))
  // 내림차순 정렬
  .sort((a, b) => a - b)
  .join(' ');
console.log(ans);
