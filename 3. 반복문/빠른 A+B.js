// 15552
var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split('\n');
var t = parseInt(input[0]);
var ans = '';
for (let i = 1; i <= t; i++) {
  const [a, b] = input[i].split(' ').map(i => +i);
  ans += a + b + '\n';
}
console.log(ans);

/* 
  해당 문제는 시간 초과를 하지 않고 출력해야한다.
  콘솔을 반복문에서 매번 호출하는 것은 시간초과,
  마지막에 한번만 호출하는 것은 통과됐다.

  아래는 GPT의 설명
  -------------------------------------------------------------------------------------------------------------------------
  console.log를 반복문 내에서 반복할 때와 마지막에 한 번만 호출할 때의 속도 차이는 주로 다음과 같은 이유 때문입니다:

  1. I/O 비용: console.log는 출력을 표준 출력 스트림에 쓰는 I/O 작업을 수행합니다. 
  이러한 I/O 작업은 시스템 리소스를 사용하므로 반복문 내에서 매번 호출할 때마다 오버헤드가 발생합니다.

  2. 버퍼링: console.log가 각각의 호출마다 출력을 즉시 표시하는 것이 아니라, 내부적으로 출력을 버퍼링하여 한꺼번에 출력할 때가 있습니다. 
  이는 반복문 내에서 호출할 때에는 더 많은 버퍼링 작업이 발생할 수 있습니다.

  3.최적화: 일부 브라우저나 실행 환경에서는 console.log 호출을 최적화하여 성능을 향상시키기도 합니다. 
  이 최적화는 반복문 내에서 여러 번 호출할 때보다 마지막에 한 번 호출할 때에 더 효과적일 수 있습니다.

  따라서 반복문 내에서 console.log를 여러 번 호출하는 것보다는 마지막에 한 번 호출하는 것이 더 효율적일 수 있습니다. 
  그러나 성능 차이는 실행 환경에 따라 다를 수 있으므로 실제로 실행하여 비교하는 것이 좋습니다.
  -------------------------------------------------------------------------------------------------------------------------

*/
