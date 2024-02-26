const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let square = {
  x: {},
  y: {},
};
let ans = '';

// 각 x, y 좌표에 숫자 개수가 1만 존재하면 그것이 4번째 좌표의 수가 된다.
for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  square['x'][x] = (square['x'][x] || 0) + 1;
  square['y'][y] = (square['y'][y] || 0) + 1;
}
for (let key in square.x) {
  if (square.x[key] === 1) {
    ans += key + ' ';
  }
}
for (let key in square.y) {
  if (square.y[key] === 1) {
    ans += key;
  }
}
console.log(ans);
