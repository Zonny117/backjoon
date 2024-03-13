// 2884
var fs = require('fs');
var input = fs
  .readFileSync('./input.txt')
  .toString()
  .split(' ')
  // + 부등호는 문자열을 숫자로 변환할 수 있다.
  .map(value => +value);
var [h, m] = input;
// 분에서 45분을 뺏을때 음수이면, 시간은 -1이 되야함
if (m - 45 < 0) {
  if (h === 0) {
    // 만약 시간이 0일때, 23을 할당
    h = 23;
  } else {
    // 0이 아닐 때는 -1
    h -= 1;
  }
  // m에서 45를 뺀 값이 음수일 때는 60 - 45 = 15
  // 분에 15를 더함
  console.log(h, m + 15);
} else {
  // 분에서 45를 뺀 값이 0 이거나 양수일 때는 -45를 뺌, 시간은 변화없음
  console.log(h, m - 45);
}
