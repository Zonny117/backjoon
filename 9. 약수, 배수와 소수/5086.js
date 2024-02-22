const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
/* 
  약수 * 약수 = 배수

  첫번째 수 A가 두번째 수 B의 약수이면 factor
  B % A === 0
  첫번째 수 A가 두번째 수 B의 배수이면 multiple
  A % B === 0
  둘다 아니면 neither

  문제에 두 수가 같은 경우가 없다고 명시되어 있기 때문에
  하나의 조건이 성립하면 해당 반복 횟수는 종료되어야함
*/

let ans = [];

for (let i = 0; i < input.length - 1; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  if (b % a === 0) {
    ans.push('factor');
    continue;
  } else if (a % b === 0) {
    ans.push('multiple');
    continue;
  } else {
    ans.push('neither');
  }
}
console.log(ans.join('\n'));
