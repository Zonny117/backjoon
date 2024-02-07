var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(t => +t);
// 일단 n 개수만큼 배열을 만들고, 0으로 채운다.
let arr = Array(n).fill(0);
// 첫번째 반복문은 입력값을 받아오기 위함
for (let a = 1; a <= m; a++) {
  let [i, j, k] = input[a].split(' ').map(t => +t);
  /* 
    처음에 문제를 잘못이해해서 엄청 해맸는데, i에서부터 j까지 k를 던져넣어야하는 것이었다.
    (나는 배열의 i와 j번째에만 k를 넣는줄 알았다.)
    따라서 두번째 반복문은 i에서 시작해서 j번까지 돌려야하며,
    배열의 b번째 즉 i에서 j까지 돌면서 k값을 집어넣을 것이다.
    주의점은 배열의 시작은 0이기 때문에, b-1을 준다.
  */
  for (let b = i; b <= j; b++) {
    arr[b - 1] = k;
  }
}
console.log(arr.join(' '));
