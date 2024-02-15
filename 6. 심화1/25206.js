const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const rateObj = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};
let scoreAndRate = 0;
let totalScore = 0;
for (let i = 0; i < input.length; i++) {
  const [subject, score, rate] = input[i].split(' ').map(v => v.trim());
  if (rate !== 'P') {
    scoreAndRate += +score * rateObj[rate];
    totalScore += +score;
  }
}
const ans = (scoreAndRate / totalScore).toFixed(6);
console.log(ans);
