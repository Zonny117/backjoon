var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split(' ');
var y = parseInt(input);
if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
  console.log('1');
} else {
  console.log('0');
}
