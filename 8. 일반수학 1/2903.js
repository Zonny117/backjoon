const fs = require('fs');
const n = +fs.readFileSync('./input.txt').toString().trim();
/* 
    정답은 가로 점의 개수 * 세로 점의 개수를 구하면 된다.
    n만큼 반복될때마다 가로와 세로의 정사각형 개수는 2의 제곱만큼 늘어남
    그리고 정사각형 개수의 + 1, 즉 2의 제곱 + 1이 각 변의 점 개수가 됨
    또한, 정사각형이기 때문에 각 변의 점 개수는 동일하기 떄문에 2번만 곱해주면 된다.
*/
const pow = Math.pow(2, n);
const dots = pow + 1;
console.log(dots * dots);
