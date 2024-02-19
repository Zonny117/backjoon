const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
// 최대 길이값 추출, 입력값 줄마다 개수가 다를 수 있음
const max = Math.max(...input.map(v => v.trim().length));
let ans = '';
// i는 최대 길이 만큼 반복 (가로줄을 모두 탐색할 수 있음)
for (let i = 0; i < max; i++) {
  // j는 입력값 배열 길이만큼 반복 (세로 방향으로 전부 탐색할 수 있음)
  for (let j = 0; j < input.length; j++) {
    /* 
      문제는 빈값이나 undefined가 있을 수 있는데,
      값이 존재하면 그대로 ans에 추가하고, 아니라면 빈 문자열을 넣는다.
    */
    ans += input[j][i] || '';
  }
}
console.log(ans);
