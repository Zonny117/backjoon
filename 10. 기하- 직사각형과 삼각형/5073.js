const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
for (let i = 0; i < input.length - 1; i++) {
  const lines = input[i].split(' ').map(Number);
  const max = Math.max(...lines);
  lines.splice(lines.indexOf(max), 1);
  let sum = 0;
  for (let j = 0; j < lines.length; j++) {
    sum += lines[j];
  }
  if (max < sum) {
    if (max === lines[0] && max === lines[1]) {
      console.log('Equilateral');
    } else if (max === lines[0] || lines[0] === lines[1] || max === lines[1]) {
      console.log('Isosceles');
    } else {
      console.log('Scalene');
    }
  } else {
    console.log('Invalid');
  }
}
