const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

for (let i = 0; i < input.length - 1; i++) {
  let count = 0;
  let arr = [];
  // 약수로 나눈 값 오름차순 배열로 담는 반복문
  for (let j = 1; j <= input[i]; j++) {
    if (input[i] % j === 0 && input[i] / j !== input[i]) {
      arr.push(input[i] / j);
      arr.sort((a, b) => a - b);
    }
  }

  // 약수끼리 합하는 반복문
  for (let k = 0; k < arr.length; k++) {
    count += arr[k];
  }

  // 약수의 합이 input[i]와 일치할 경우 조건 분기
  if (input[i] === count) {
    console.log(`${input[i]} = ${arr.join(' + ')}`);
  } else {
    console.log(`${input[i]} is NOT perfect.`);
  }
}
