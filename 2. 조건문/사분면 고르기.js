// 14681
/* 14681번 문제는 fs 모듈을 사용하면 런타임에러가 나서 readline으로 교체 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  input = input.map(item => +item);
  solution(input[0], input[1]);
  process.exit();
});

// 풀이코드
function solution(x, y) {
  if (x >= 0 && y >= 0) {
    console.log('1');
  } else if (x < 0 && y >= 0) {
    console.log('2');
  } else if (x < 0 && y < 0) {
    console.log('3');
  } else {
    console.log('4');
  }
}
