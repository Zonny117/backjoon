// 25304
var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().trim().split('\n');
let x = parseInt(input[0]);
let n = parseInt(input[1]);
let sum = 0;
for (let i = 2; i <= n + 1; ++i) {
  let newArr = input[i].split(' ').map(item => Number(item));
  sum += newArr[0] * newArr[1];
}
console.log(x === sum ? 'Yes' : 'No');

/* 
  이 문제는 원인이 무엇인지 모르겠지만 처음에 계속 오류가 났다.
  trim()이 문제인 것인지 ...
*/
