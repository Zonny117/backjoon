const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const n = +input.shift();
/* 
  (x축 최대값 - 최소값) * (y축 최대값 - 최소값) = 답

  n이 1개일 경우 답은 0
*/
let xArr = [];
let yArr = [];

function calc(num) {
  return Math.max(...num) - Math.min(...num);
}

for (let i = 0; i < n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  xArr.push(x);
  yArr.push(y);
}
if (n > 1) {
  console.log(calc(xArr) * calc(yArr));
} else {
  console.log(0);
}
