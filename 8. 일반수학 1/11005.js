const fs = require('fs');
let [b, n] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(v => +v);
const base36 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let ans = '';
// b가 0보다 클때까지만 반복
while (b > 0) {
  /* 
    10진수를 36진수로 나타내기 위해서는
    10진수에 36을 나눈 몫이 0이 될때까지 계산한다.
    이 과정에서 나온 나머지들이 곧 36진수가 된다.
  */
  let rest = b % n;
  // 먼저 계산해나온 나머지가 항상 앞으로 오도록
  ans = base36[rest] + ans;
  // 나눈 몫을 내림하여 0이 될때 반복이 멈춤
  b = Math.floor(b / n);
}
console.log(ans);

/*
  사실 쉽게 풀 수 있는 법이 있다.
  toString() 메서드를 사용하는 것인데
  b.toString(n)을 하면 해결된다.

  문제는 이게 처음에 안되서 계산을 했는데
  알고보니 대문자로 표시를 안해서 생긴 문제였던거 같다.
  b.toString(n).toUpperCase()가 숏코딩 정답이다.
*/
