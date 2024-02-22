const fs = require('fs');
const n = +fs.readFileSync('./input.txt').toString().trim();
let count = 1;
let rooms = 1;
// 입력값이 방 개수보다 클때까지 반복
while (n > rooms) {
  // 1번 방이면 답은 그대로 1
  if (n === 1) break;
  /* 
    방은 한반퀴에 6칸씩 늘어남
    주의할 점은 기존 rooms에 count * 6을 재할당하는게 아니라
    누적해서 더해야한다.

    재할당을 하면 반복문이 한번 더 돌게됨
  */
  rooms += count * 6;
  count++;
}
console.log(count);
