const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
const t = input.shift();
const [quarter, dime, nickel, penny] = [25, 10, 5, 1];
let ans = '';
for (let i = 0; i < t; i++) {
  let count = [0, 0, 0, 0];
  while (input[i] > 0) {
    if (input[i] >= quarter) {
      input[i] -= quarter;
      count[0]++;
    } else if (input[i] >= dime) {
      input[i] -= dime;
      count[1]++;
    } else if (input[i] >= nickel) {
      input[i] -= nickel;
      count[2]++;
    } else {
      input[i] -= penny;
      count[3]++;
    }
  }
  ans += count.join(' ') + '\n';
}
console.log(ans);

/* 
  각 입력값을 코인으로 나눈 나머지를 가지고 계산하는 간단한 방식도 있다.
  입력값이 124일 경우, 먼저 쿼터로 나눈 나머지가 24 몫은 4.96이 뜨는데 내림으로 4라는 값을 얻을 수 있다.
  이런 방식으로 나머지가 0이 되도록 나누고 몫이 이 문제의 답이 된다.
*/
