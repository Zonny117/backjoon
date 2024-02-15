const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')[0]
  .toLowerCase();
let counts = {};
let keys = [];
let key = '';
let max = 0;
/* 
  객체에 각 문자를 속성으로 카운트된 수를 값으로 넣는다.
  counts는 처음에 빈 배열이기 때문에 어떤 값을 추가하던 0부터 시작할 것이고 거기에 +1을 하면
  1부터 시작하게 만들 수 있다.
  만약 이미 존재하는 속성 값이 있다면 누적된 해당 속성 값에다가 +1을 더한다.
  이렇게 반복문을 돌면서 각 문자에 대한 카운트를 계산 할 수 있다.
*/
input.split('').forEach(i => {
  counts[i] = (counts[i] || 0) + 1;
});

/* 
  이제 각 문자의 최대값과 그에 해당하는 속성을 추출해야한다.
  변수 max는 처음에 0으로 할당되어 있고, 
  객체의 속성 값이 max를 이상일 때마다 덮어쓴다.
  또한 변수 key에도 해당 속성을 할당한다.
*/
for (x in counts) {
  let value = counts[x];
  if (value > max) {
    max = value;
    key = x;
  }
}

/* 
  문제는 최댓값이 똑같은 속성이 존재할 수 있다는 점.
  따라서 객체의 속성 값이 max와 동일하면서, 변수 key에 할당된 문자와 다르다면 
  최댓값이 동일한 문자라는 것을 유추할 수 있다.
  해당 문자를 keys 배열에 푸쉬한다.
*/
input.split('').forEach(i => {
  counts[i] === max && i !== key ? keys.push(i) : null;
});

/* 
  만약에 keys 배열이 비어있다면 그것은 최댓값을 가진 문자가 단 하나만 존재한다는 것이기 때문에
  그대로 출력을 하면 되고, 배열의 길이가 1개 이상이라는 것은 중복값이 존재한다는 얘기가 됨으로
  물음표를 출력한다.
*/
keys.length === 0 ? console.log(key.toUpperCase()) : console.log('?');
