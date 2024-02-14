var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().trim().split(/\s+/);
const n = +input[0];
let ans = '';
for (let i = 1; i <= n; i++) {
  ans += input[i].charAt(0) + input[i].charAt(input[i].length - 1) + '\n';
}
console.log(ans);