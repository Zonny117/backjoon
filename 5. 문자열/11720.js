const fs = require('fs');
const [n, m] = fs.readFileSync('./input.txt').toString().trim().split(/\s+/);
let ans = 0;
for (let i = 0; i < n; i++) {
  ans += parseInt(m.charAt(i));
}
console.log(ans);

/* 
  문제를 잘못 이해해서 오래걸림
  n은 주어진 숫자의 개수였다. 나는 n + m의 결과를 출력하라는 줄.
*/
