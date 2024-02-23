const fs = require('fs');
const [n, k] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
  // 나머지가 0이면 약수
  if (n % i === 0) {
    // 해당 약수로 나눈 값들만 배열에 담기
    arr.push(n / i);
  }
}
// 배열 개수가 K 개수보다 작으면 k번째 수를 출력할 수 없으니 0으로
if (arr.length < k) {
  console.log(0);
} else {
  /* 
    [sort 함수의 주의점]
    기본적으로 문자열로 변환한 후 유니코드 코드 포인트 순서로 정렬, 이는 숫자가 아닌 문자열로 취급되어 예상과 다른 결과가 나타날 수 있다.
    따라서 아래와 같이 인자를 전달해야한다.
    a-b면 오름차순, b-a면 내림차순이 된다.
  */
  console.log(arr.sort((a, b) => a - b)[k - 1]);
}
