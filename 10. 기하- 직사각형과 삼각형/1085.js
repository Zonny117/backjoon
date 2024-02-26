const fs = require('fs');
const [x, y, w, h] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const min = Math.min(x, y, w - x, h - y);
console.log(min);