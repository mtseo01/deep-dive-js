// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

const arr = [1, 2, 3, 4, 5];
// 0번 인덱스 삭제
arr.splice(0, 1);
console.log(arr); // [ 2, 3, 4, 5 ]

const arr2 = [1, 3, 4, 5];
// 1번 인덱스에 값 추가하기
arr2.splice(1, 0, 2);
console.log(arr2); // [ 1, 2, 3, 4, 5 ]

// 응용하기
// 특정한 값의 인덱스를 찾은 뒤 그 특정한 값을 삭제하기.
const cars = ['k3', 'k5', 'k7', 'ray'];

const index = cars.indexOf('ray');
console.log(index); // 3

cars.splice(index, 1);
console.log(cars); // [ 'k3', 'k5', 'k7' ]
