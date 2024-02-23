// 제출시 /dev/stdin
const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const n = input.shift();

/* 
  소수(Prime Number)란 2보다 큰 자연수 중에서 1과 자기 자신을 제외한 자연수로는 나누어떨어지지 않는 자연수
*/
let count = 0;

for (let i = 0; i < n; i++) {
  let arr = [];
  // 1은 소수가 아니기 때문에 1은 패스~~
  if (input[i] === 1) continue;
  for (let j = 1; j <= input[i]; j++) {
    // 나머지가 0이 되는 숫자 배열에 담기
    if (input[i] % j === 0) {
      arr.push(j);
    }
  }
  // 배열에 1과 본인 숫자만 존재한다면 2일 것이며, 그것은 소수라는 뜻
  // 생각해보니 arr.length === 2가 더 정확한 정답일 듯?
  if (arr.length <= 2) {
    count++;
  }
}
console.log(count);
