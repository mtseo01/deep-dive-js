// map()과 forEach()의 차이
// map은 새 배열을 반환하고, forEach는 현재 배열을 변환한다.

let arr = [1, 2, 3, 4, 5];
let newArr = [];

arr.map((item) => newArr.push(item * 2));
console.log(newArr); // [ 2, 4, 6, 8, 10 ]

let newArr2 = [];

arr.forEach((item) => newArr2.push(item * 2));
console.log(newArr2); // [ 2, 4, 6, 8, 10 ]

const newArr3 = arr.map((item) => item * 3);
console.log(newArr3); // [ 3, 6, 9 , 12, 15 ]

const newArr4 = arr.forEach((item) => item * 3);
console.log(newArr4); // undefined
