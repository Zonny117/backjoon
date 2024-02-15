const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(/\s+/);
const n = +input[0];
// 카운트는 주어진 문자개수
let count = n;
// 주어진 문자개수만큼 반복
for (let i = 0; i < n; i++) {
  let arr = [];
  const str = input[i + 1];
  // 각 문자 개수만큼만 반복
  for (let j = 0; j < str.length; j++) {
    // 이전 문자 중에 같은 문자가 없을시
    if (arr.indexOf(str[j]) === -1) {
      arr.push(str[j]);
    } else {
      /* 
        이전 문자중에 같은 문자가 존재하면, 여기서 케이스를 나눠서 봐야한다.
        aaa이냐 aba이냐의 차이인데
        전자는 그룹단어가 되고, 후자는 아니기 때문에
        마지막에 들어간 문자와 현재의 문자를 비교하여 일치하면 그룹단어가 되기에,
        그대로 해당 문자를 배열에 추가,
        일치하지 않다면 같은 문자 사이에 다른 문자가 있다는 것이므로
        count를 감소한다.

        또한, 그룹단어가 아니라고 판단된 즉시 반복문을 종료하여,
        계산오류를 방지한다.
      */
      if (str[j] !== str[j - 1]) {
        count -= 1;
        break;
      } else {
        arr.push(str[j]);
      }
    }
  }
}
console.log(count);
