// Array.prototype.includes
// 배열 내에 특정 요소가 포함되어 있는지 확인하여 true 또는 false를 반환함

const arr = [1, 2, 3, 4];

console.log(arr.includes(2)); // true

console.log(arr.indexOf(3)); // 2
console.log(arr.indexOf(5)); // -1 없으면 -1 반환

console.log(arr.indexOf(6) !== -1); // false

console.log([NaN].includes(NaN)); // true
console.log([NaN].indexOf(NaN)); // -1 indexOf에서는 NaN이 포함되어 있는지 확인할 수 없는 문제가 있다.
