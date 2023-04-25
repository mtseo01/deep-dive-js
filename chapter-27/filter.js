// 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
const numbers = [1, 2, 3, 4, 5];

const even = numbers.filter((number) => number % 2 === 0);
console.log(even); // [ 2, 4 ]

// 3개의 인수를 받는다 filter(item, index, this)
[1, 2, 3].filter((item, index, arr) => {
  console.log(
    `item : ${item}, index : ${index}, this : ${JSON.stringify(arr)}`
  );
});
/*
item : 1, index : 0, this : [1,2,3]
item : 2, index : 1, this : [1,2,3]
item : 3, index : 2, this : [1,2,3]
*/
