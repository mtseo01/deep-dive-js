/**
 * 원본 배열에 인수로 전달한 요소와 중복되는 요소가 여러 개 있다면 첫 번째로 검색된 요소의 인덱스를 반환한다.
 * 원본 배열에 인수로 전달한 요소가 존재하지 않으면 -1을 반환한다.
 */

const arr = [1, 2, 2, 3];

console.log(arr.indexOf(1)); // 0
console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(4)); // -1 (요소가 존재하지 않음)

// indexOf 메서드는 배열에 특정 요소가 존재하는지 확인할 때 유용하다.
const foods = ['apple', 'banana', 'orange'];

if (foods.indexOf('remon') === -1) {
  foods.push('remon');
}

console.log(foods); // [ 'apple', 'banana', 'orange', 'remon' ]

// indexOf 메서드 대신 es7에서 도입된 Array.prototype.includes 메서드를 사용하면 가독성이 더 좋다.

console.log(foods.includes('apple')); // true
