const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ')[0];
const reg = /c=|c-|dz=|d-|lj|nj|s=|z=/g;
// 매치되지 않는 패턴일때는 빈배열이 할당되도록 조치, 여기서 런타임에러(type error)가 발생했음.
const croatian = input.match(reg) || [];
const single = input.replace(reg, '');
console.log(croatian.length + single.length);
