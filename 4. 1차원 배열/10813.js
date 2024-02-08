var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(t => +t);
let arr = [];
// 첫번째 반목문에서 n만큼 배열 만들기
// let arr = Array.from({ length: 5 }, (i, idx) => idx + 1); 이렇게 만드는 방법도 있다.
for (let a = 1; a <= n; a++) {
  arr.push(a);
}
// 4번만큼 반복하면서 배열 내 i,j번째에 맞는 애들끼리 순서 바꾸기
for (let b = 0; b < m; b++) {
  const [i, j] = input[b + 1].split(' ').map(num => +num);
  [arr[i - 1], arr[j - 1]] = [arr[j - 1], arr[i - 1]];
}
console.log(arr.join(' '));
