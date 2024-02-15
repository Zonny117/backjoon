const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ')[0];
let rev = [];
for (let i = 0; i < input.length; i++) {
  rev.push(input[i]);
}
rev.reverse();
input === rev.join('') ? console.log(1) : console.log(0);