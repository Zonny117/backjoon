// 2439
var fs = require('fs');
var input = fs
  .readFileSync('./input.txt')
  .toString()
  .split(' ')
  .map(value => +value);
var n = input[0];
var ans = '';
var space = '';
// n5인 경우, i의 반복문은 5번을 돔
for (let i = 0; i < n; i++) {
  ans += '*';
  /* 
    반복문안에 반복문이다.
    i가 한번 돌때마다, k는 n-1만큼 반복한다.
    그럼 i에서 별이 하나 추가될때 k는 4번 반복한다.
    주의점은 공백 4개에 별 1개이기 때문에, k는 1부터 시작한다.
    n - i라고 해도, i는 처음에 0이기 때문에 결과적으로 k는 5번을 돌아서
    불필요하게 공백이 1개가 추가된다. (여기서 출력오류났음)
  */
  for (let k = 1; k < n - i; k++) {
    space += ' ';
  }
  // 별(i) 한개가 생길때마다, 공백(k)는 별 개수 - 1만큼 생성되는 것
  console.log(space + ans);
  // 공백을 초기화하지 않으면, 그대로 공백 옆에 계속 추가되기 때문에 초기화가 필요
  space = '';
}
