// 10811
var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(i => +i);
let arr = Array.from({ length: n }, (i, idx) => idx + 1);

for (let a = 0; a < m; a++) {
  // 배열 초기화 매우 중요!!, 다시 빈배열로 시작함.
  let rev = [];
  const [i, j] = input[a + 1].split(' ').map(i => +i);
  // i번째부터 j번째까지 반복
  for (let b = i - 1; b < j; b++) {
    // 해당 순서에 속한 원소들을 전부 푸쉬(1에서부터 작은 순서로 들어옴)
    rev.push(arr[b]);
  }
  // 여기서 역순으로 반전
  rev.reverse();
  // splice로 시작값은 i - 1(배열은 0부터 시작하니까, 두번째는 j-i로 격차를 구하고, 더하기 1 (splice의 두번째 인자는 시작값이 1로 시작함)
  arr.splice(i - 1, j - i + 1, ...rev);
}
console.log(arr.join(' '));