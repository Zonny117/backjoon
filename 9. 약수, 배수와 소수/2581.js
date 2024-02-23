const fs = require('fs');
const [m, n] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

/* 
  출력값에 공백이 있었는지 계속 오답이 나왔었다
  진짜 개빡치네
*/

let prime = [];

for (let i = m; i <= n; i++) {
  // 1은 소수가 아니니 패스 ~~
  if (i === 1) continue;
  let arr = [];

  for (let j = 1; j <= i; j++) {
    // 나누어 떨어지는 수를 arr에 추가
    if (i % j === 0) {
      arr.push(j);
    }
  }
  // arr 길이가 2개면 1, 자기자신만 존재하는 것이니 소수
  if (arr.length === 2) {
    prime.push(i);
  }
}

// prime이 빈배열이면 소수가 없다는 뜻
if (!prime.length) {
  console.log('-1');
} else {
  // 있으면 sum에 소수합, min에 소수들중 최솟값 출력
  const sum = prime.reduce((acc, val) => acc + val, 0);
  const min = Math.min(...prime);
  console.log(sum);
  console.log(min);
}

/* 
  아래와 같은 코드로 더 효율적으로 짤 수 있다.
*/

function solution(t) {
  // 소수가 1이라면 패스~~
  if (t <= 1) return false;

  /* 
  i가 2부터 시작하는 이유는 2 또한 계산할 필요없이 
  소수이기 때문이다. (나눌 수 있는 수가 1과 2만 존재 즉, 1과 자기자신)
  
  또한, Math.sqrt() 제곱근을 구할 수 있는 내장 객체의 메소드다.
  어떠한 수의 제곱근은 그 어떠한 수들로 나눌 수 있다는 뜻이다.
  이것이 여러개가 존재한다면 소수가 아님을 쉽게 알 수 있다.

  예) 5의 제곱근 = 2.236 ... 따라서 반복문은 1번만 실행되는데,
  2로는 나뉘어지지 않으니 소수임을 알 수 있다.

  예) 12의 제곱근 = 3.464... 반복문은 2번 실행된다. (2,3)
  12는 2, 3 전부 나뉠 수 있기 때문에 소수가 아니다.

  */
  for (let i = 2; i <= Math.sqrt(t); i++) {
    if (t % i === 0) return false;
  }
  return true;
}

for (let i = m; i <= n; i++) {
  if (solution(i)) {
    prime.push(i);
  }
}
