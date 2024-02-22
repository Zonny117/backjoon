const fs = require('fs');
const x = +fs.readFileSync('./input.txt').toString().trim();

/* 
  분수는 처음에 2번 간격으로 분자와 분모값이 증가하거나 감소하고 있다.
  규칙은 분모 혹은 분자가 1일때 다른쪽이 증가하고 지그재그의 기준점이 된다는 것.
*/
let numer = 1;
let deno = 1;
let trigger = true;
// 입력값미만 까지만 반복시킨다.
for (let i = 1; i < x; i++) {
  if (x === 1) break;
  if (trigger) {
    // 분모증가
    if (numer === 1) {
      // 분자가 1일때는 분자는 더이상 감소하지 않고 분모만 증가시킨다.
      // 그리고 트리거를 false로 둠
      trigger = false;
      deno++;
    } else {
      numer--;
      deno++;
    }
  } else {
    // 분자증가
    if (deno === 1) {
      // 분모가 1일때는 분모는 더이상 감소하지 않고 분자만 증가시킨다.
      // 그리고 트리거를 true로 둠
      trigger = true;
      numer++;
    } else {
      numer++;
      deno--;
    }
  }
}
console.log(`${numer}/${deno}`);

/* 
  let limit = 1, n = 1;

  while (limit < X) {
    limit += n + 1;
    n++;
  }

  const a = n - (limit - X);

  if (n % 2 === 0) {
    console.log(`${a}/${n-a+1}`);
  } else {
    console.log(`${n-a+1}/${a}`);

  이런 간단한 풀이 방식도 있다.
*/
