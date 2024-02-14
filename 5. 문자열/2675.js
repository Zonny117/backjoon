const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const t = input[0];
let ans = [];
// t 주어진 입력값 개수
for (let i = 0; i < t; i++) {
  let str = '';
  // r - 각 문자 반복횟수, s - 문자열
  const [r, s] = input[i + 1].split(' ');
  for (let j = 0; j < s.length; j++) {
    str += s[j].repeat(r);
  }
  ans.push(str.trim())
}
console.log(ans.join("\n"));
