const fs = require('fs');
const s = fs.readFileSync('./input.txt').toString().trim().split(' ')[0];
// a의 아스키 코드는 97 여기서 1씩 더해서 알파벳을 z까지 구함
const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode('a'.charCodeAt(0) + i)
);
let ans = '';
for (let i = 0; i < alphabet.length; i++) {
  ans += s.indexOf(alphabet[i]) + ' ';
}
console.log(ans);
