var input = require('fs').readFileSync('./input.txt').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
/* 
    Math.round 와 Math.floor의 차이를 주의
    혹은 parseInt로 정수로 표현해도 됨
*/
console.log(Math.floor(a / b));
console.log(a % b);
