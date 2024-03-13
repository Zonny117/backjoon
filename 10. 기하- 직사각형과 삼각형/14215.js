const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
/* 
    삼각형이 될 수 있는 조건
    두 변의 길이의 합이 한 변의 길이보다 커야한다.

    가장 큰 둘레를 구하려면
    가장 긴 변의 길이가 다른 두 변의 합보다 작아야함.
*/
const [a, b, c] = input.sort((a, b) => a - b);
if (c < a + b) {
  console.log(a + b + c);
} else {
  console.log((a + b) * 2 - 1);
}
