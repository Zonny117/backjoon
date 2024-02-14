const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ')[0];
console.log(input.charCodeAt());