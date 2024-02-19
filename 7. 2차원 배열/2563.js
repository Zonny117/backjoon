const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
// 100x100 도화지 2차원 배열
const canvas = Array.from({ length: 100 }, () =>
  Array.from({ length: 100 }).fill(0)
);
// 색종이 개수
const n = +input.shift();
let count = 0;

// 첫번째 반복문은 입력값 처리를 위함
for (let i = 0; i < n; i++) {
  // x, y 좌표
  const [x, y] = input[i].split(' ').map(Number);
  /* 
    j의 반복문은 x+10 만큼 반복
    canvas의 j번째 배열을 찾음
  */
  for (let j = x; j < x + 10; j++) {
    /* 
      k의 반복문은 y+10 만큼 반복
      canvas j번째 배열의 k번째 숫자에 1을 넣음

      만약에 중복된 배열안에서 1의 숫자가 이미 존재할 경우
      해당 반복은 취소하고 그 다음 반복으로 넘어감
    */
    for (let k = y; k < y + 10; k++) {
      if (canvas[j][k] === 1) {
        continue;
      }
      canvas[j][k] = 1;
      // 1이 할당될 때마다 카운트
      count++;
    }
  }
}
// 최종적으로 2차원 배열안에 1의 총 개수가 색종이의 넓이가 된다.
console.log(count);
