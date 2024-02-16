const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x =>
    x
      .trim()
      .split(' ')
      .map(x => +x)
  );
/* 
  2차원 배열문제인데, 입력값 처리가 아주 뭣같은 문제였다.
  입력값부터 2차원 배열로 담고, 행렬를 담기위한 2차원 배열을 또 준비해야했다. (이게 개빡침)
  그러고 나서 문제풀이하면 된다.
  이 문제는 준비과정에서 런타임에러가 자꾸 나와서 짜증을 유발시켰다.
*/
const [n, m] = input.shift();
let arr = Array.from({ length: n }, () => Array.from({ length: m }).fill(0));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    arr[i][j] = input[i][j] + input[i + n][j];
  }
}
let ans = '';
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    ans += arr[i][j] + ' ';
  }
  ans += '\n';
}
console.log(ans);
