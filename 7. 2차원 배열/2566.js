const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const arr = Array.from({ length: 9 }, () => Array.from({ length: 9 }).fill(0));
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    // 타입 변환은 중요하다. 백준의 입력값은 항상 문자열로 들어온다.
    arr[i][j] = parseInt(input[i].split(' ')[j]);
  }
}
/* 
  특정 상황에서 문제가 발생한다.
  max의 초기값이 0이면 모든 입력값이 0일 경우에 오류가 있다.
  따라서 초기값을 -1으로 하면, 0이 입력값으로 들어와도 문제가 없다.
*/
let max = -1;
let pos = [0, 0];
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (arr[i][j] > max) {
      max = arr[i][j];
      pos = [i + 1, j + 1];
    }
  }
}
console.log(`${max}\n${pos.join(' ')}`.trim());
