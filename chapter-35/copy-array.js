// 배열 복사
// es5에서 배열을 복사하려면 slice 메서드를 사용한다.
var origin = [1, 2];
var copy = origin.slice();
console.log(copy); // [ 1, 2 ]
console.log(copy === origin); // false

// es6
const origin2 = [1, 2];
const copy2 = [...origin];

console.log(copy2); // [ 1, 2 ]
console.log(copy2 === origin2); // false

const sum = (...args) => args.reduce((pre, cur) => pre + cur, 0);
console.log(sum(1, 2, 3)); // 6

const arr = [4, 5, 6];
console.log(sum(...arr)); // 15
