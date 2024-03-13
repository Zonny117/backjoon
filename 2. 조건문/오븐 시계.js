// 2525
var fs = require('fs');
// 정규표현식 공백으로 자르고, map 함수로 숫자로 변환
var input = fs.readFileSync('./input.txt').toString().split(/\s+/).map(Number);
var [h, m, t] = input;
var calc = m + t;
// 분에 더한게 60 이상이면 실행
if (calc > 59) {
  // 60분 이상의 값이 나왔다면, 나누기 60으로 시간 구함, (예시 - [60 / 60 = 1시간], [120 / 60 = 2시간])
  // 소수점으로 떨어지면 floor로 내림
  h = h + Math.floor(calc / 60);
  // 분은 60 이상의 값을 60으로 나눈 나머지를 구함. (예시 120 / 60의 나머지는 0)
  // 따라서 calc 값을 60으로 나눈 몫이 시간이고, 나머지가 분이 되는 것.
  m = calc % 60;
  // 그런데, 시간이 24 이상으로 나오면, 시간을 0부터 시작해야함
  // 따라서 24를 뺌
  if (h >= 24) {
    h = h - 24;
  }
  console.log(h, m);
} else {
  // 60분 이상의 값이 안나오면 그대로 출력
  console.log(h, calc);
}
