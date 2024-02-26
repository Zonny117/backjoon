const fs = require('fs');
const [a, b] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
console.log(a * b);
