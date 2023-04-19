// 배열 리터럴 내부에서 사용하는 경우
// es5에서는 concat
var arr = [1, 2].concat([3, 4]);
console.log(arr); // [ 1, 2, 3, 4 ]

// es6
const arr2 = [...[1, 2], ...[3, 4]];
console.log(arr2); // [ 1, 2, 3, 4 ]

// es5에서 어떤 배열의 중간에 다른 배열의 요소들을 추가하거나 제거하려면 splice 메서드를 사용한다. 이때 splice 메서드의 세 번째 인수로 배열을 전달하면 배열 자체가 추가된다.

// es5
var arr3 = [1, 4];
var arr4 = [2, 3];
// 세 번째 인수 arr4를 해제하여 전달해야 한다.
// 그렇지 않으면 arr1에 arr2 배열 자체가 추가된다.
arr3.splice(1, 0, arr4);
// 기대한 결과는 [1, 2, 3, 4]
console.log(arr3); // [ 1, [ 2, 3 ], 4]

// es6
const arr5 = [1, 4];
const arr6 = [2, 3];
arr5.splice(1, 0, ...arr6);
console.log(arr5); // [ 1, 2, 3, 4 ]
