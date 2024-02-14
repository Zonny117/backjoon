const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ')[0];
const alphabet = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
let arr = [];
for (let i = 0; i < alphabet.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (alphabet[i].indexOf(input[j]) !== -1) {
      /* 
        +3을 더한 이유는
        다이얼 2번부터 알파벳이 시작함. 
        즉, 할머니가 A가 있는 다이얼을 누른경우 다이얼 버튼은 2번임.
        근데, 배열은 0부터 시작 따라서 +2를 해줌.

        또한, 1번 다이얼을 누를때 걸리는 시간이 2초이며, 그 다음 버튼부턴 순자적으로 1초씩 늘어난다고 했으니
        선택한 다이얼에 +1을 한 것이 걸리는 시간이다.

        따라서 총 +3을 더해주면, 각 알파벳에 해당하는 걸리는 시간을 arr 배열에 푸쉬할 수 있다.
      */
      arr.push(i + 3);
    }
  }
}
const ans = arr.reduce((acc, cur) => acc + cur, 0);
console.log(ans);
