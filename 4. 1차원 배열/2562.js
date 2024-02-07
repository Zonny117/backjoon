var fs = require('fs');
var input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
const max = Math.max(...input);
const index = input.indexOf(max);
console.log(`${max}\n${index + 1}`);