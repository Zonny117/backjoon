const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ');
let ans = 0;
if (input.length === 1 && input[0] === '') {
  console.log(0);
} else {
  ans = input.length;
  console.log(ans);
}

/* 
  함정이 있는 문제다.
  입력값에 아무것도 없을때 split으로 자르면 length 값이 1이 찍힌다.
  "" 빈값이 한개가 찍히는 것.
  따라서 조건문으로 해당 값은 예외처리해야함.
*/
