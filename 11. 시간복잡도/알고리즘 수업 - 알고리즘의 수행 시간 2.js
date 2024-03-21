// 24263
const fs = require('fs');
const n = fs.readFileSync('./input.txt').toString().trim();

/* 
  [문제 알고리즘]

  MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n
      sum <- sum + A[i]; # 코드1
    return sum;
  }
*/

console.log(n);
console.log(1);

/* 
  주어진 알고리즘은 n번 반복하면서 배열 A의 요소들을 더한다.
  여기서 수행횟수는 n이다. (n번 반복하기 때문)
  이를 빅오 표기법으로 나타내면, 아래와 같다.

    sum <- 0; # O(1)
    for i <- 1 to n
      sum <- sum + A[i]; # n * O(1)
    return sum; # O(1)

    => O(1) + n * O(1) + O(1)
    => 표기법 규칙에 따라 최고차항만 생각한다. 상수 제거
    => n
    => O(n)

    따라서 O(n)은 n의 횟수에 따라서 선형적으로 시간이 증가하는 알고리즘이다.
    차수는 1이다.
*/
