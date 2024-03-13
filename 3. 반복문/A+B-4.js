// 10951
// trim 주의
var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().trim().split('\n');
for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(t => +t);
  console.log(a + b);
}
