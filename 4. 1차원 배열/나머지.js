// 3052
var fs = require('fs');
var input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
let arr = [];
input.forEach(i => arr.push(i % 42));
// Set 인스턴스는 배열내 중복된 값을 제거하고 새배열을 반환한다.
let ans = [...new Set(arr)];
console.log(ans.length);
