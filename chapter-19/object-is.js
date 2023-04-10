console.log(1 == '1'); // true

// 타입까지 비교
console.log(1 === '1'); // false
console.log(-0 === 0); // true

// 자바스크립트 상에서 NaN === NaN 은 false를 나타낸다.
console.log(NaN === NaN); // false

// 좀 더 확실하게 타입까지 비교하고 싶을 때는 Object.is()를 사용한다.
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(1, '1')); // false
console.log(Object.is(-0, 0)); // false
