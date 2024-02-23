const fs = require('fs');
const n = +fs.readFileSync('./input.txt').toString().trim();
let a = n;
for (let i = 2; i <= n; i++) {
  // 1일 경우 반복 종료
  if (n === 1) break;
  // 소인수 분해 시작
  if (n % i === 0) {
    /* 
      a / i가 더이상 나눠지지 않을때까지 반복
    */
    while (a % i === 0) {
      a = a / i; // 처음에 a = n / i로 해서 무한 루프에 빠졌다. 생각해보니 n은 변하지 않는 수라는 것을 깜빡했다.
      console.log(i);
    }
  }
}
