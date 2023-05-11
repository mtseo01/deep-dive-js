// Array.prototype.every

// 배열의 모든 요소가 3보다 큰지 확인
console.log([5, 6, 15].every((item) => item > 3)); // true
// 배열의 모든 요소가 10보다 큰지 확인
console.log([5, 10, 15].every((item) => item > 10)); // false

// every는 빈 배열인 경우 언제나 true를 반환한다.
console.log([].every((item) => item > 3)); // true
