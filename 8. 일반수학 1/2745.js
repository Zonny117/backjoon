const fs = require('fs');
const [b, n] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(v => v);
/*
  36진수에서 0~9는 0~9를 뜻하고
  A~Z는 10~35를 뜻한다.
  따라서 0~35, 총 36개의 수를 1자리 숫자와 알파벳으로 표기함
*/
const base36 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let sum = 0;
// 입력값 b, 36진수의 글자수만큼 반복
for (let i = 0; i < b.length; i++) {
  // 한글자씩 나눔
  const digit = b.split('')[i];
  // 나눈 글자를 base36 문자열에서 해당하는 순번으로 뽑는다. digit이 Z였다면 35가 할당됨
  const from36 = parseInt(base36.indexOf(digit));
  /* 
    36진수에서 10진수 변환 공식
    = 36진수 * 진법 * 36진수 개수 -1 역순으로 거듭제곱

    여기서는 주어진 진법(n)이 36이라 가정하고 36진수(b) 개수가 5개이며, ZZZZZ라 가정하면,
    35 * 36^4
    35 * 36^3
    35 * 36^2
    35 * 36^1
    35 * 36^0

    이런식으로 반복횟수-1 만큼 역순으로 거듭제곱하여 나온 값을 전부 합산하면 된다.
    Math.pow는 거듭제곱을 쉽게 할 수 있는 수학함수이다.
    Math.pow(진법, 거듭제곱할 횟수)
  */
  sum += from36 * Math.pow(parseInt(n), b.length - i - 1);
}
console.log(sum);
