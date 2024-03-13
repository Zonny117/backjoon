// 10950
var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split(/\s+/).map(Number);
var t = input[0];
var a = input.filter((i, idx) => {
  return idx % 2 !== 0;
});
var b = input.filter((i, idx) => {
  if (idx !== 0) {
    return idx % 2 === 0;
  }
});
for (let i = 0; i < t; i++) {
  console.log(a[i] + b[i]);
}