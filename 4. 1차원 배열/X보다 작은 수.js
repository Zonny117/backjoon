// 10871
var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const [n, x] = input[0].split(' ').map(t => +t);
const a = input[1].split(' ').map(t => +t);
let ans = '';
a.filter(i => {
  if (i < x) {
    ans += i + ' ';
  }
});

// join 함수는 새로운 문자열을 반환하는 함수이다. 아래와 같이 쓰면 더 적은량의 코드로 같은 결과값을 얻을 수 있다.
// console.log(a.filter(n => n < x).join(' '));