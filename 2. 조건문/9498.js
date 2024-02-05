var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split(' ');
var a = parseInt(input);
if (a >= 90) {
  console.log('A');
} else if (a >= 80) {
  console.log('B');
} else if (a >= 70) {
  console.log('C');
} else if (a >= 60) {
  console.log('D');
} else {
  console.log('F');
}