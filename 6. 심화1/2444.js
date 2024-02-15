const fs = require('fs');
const input = +fs.readFileSync('./input.txt').toString().trim().split(' ')[0];
const limit = 2 * input - 1;
/* 
  별이 갯수가 증감이 되는 기준이 되는 지점은 /2를 하고 반올림
  -1은 반복문 시작은 0부터 하기 위함
*/
const half = Math.round(limit / 2) - 1;
let ans = '';
// 0에서 부터 절반까지 반복, 별이 증가하는 구간
for (let i = 0; i <= half; i++) {
  // 별 앞에 공백은 처음에 절반값에서 1씩 감소해야함
  ans += ' '.repeat(half - i);
  // 별은 2개씩 증가
  ans += '*'.repeat(i * 2 + 1) + '\n';
}
// 절반-1 에서부터 0까지 반복, 별이 감소하는 구간
for (let j = half - 1; j >= 0; j--) {
  // 공백은 1씩 증가해야하기 때문에 절반 값에 j만큼 뺌
  ans += ' '.repeat(half - j);
  // 별은 2개씩 감소
  ans += '*'.repeat(j * 2 + 1) + '\n';
}
console.log(ans);
