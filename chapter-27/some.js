// Array.prototype.some

// 배열의 요소 중 10보다 큰 요소가 1개 이상 존재하는지 확인
console.log([5, 10, 15].some((item) => item > 10)); // true

// some은 빈 배열인 경우 언제나 false를 반환한다.
console.log([].some((item) => item > 10)); // false
