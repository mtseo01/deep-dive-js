// es6에서 도입된 Array.from 메서드는 유사 배열 객체 또는 이터러블 객체를 인수로 전달받아서 배열로 변환하여 반환한다.

// 유사 배열 객체를 반환하여 배열을 생성한다.
console.log(Array.from({ length: 2, 0: 'a', 1: 'b' })); // [ 'a', 'b' ]

// 이터러블을 반환하여 배열을 생성한다. 문자열은 이터러블이다.
console.log(Array.from('Hello')); // [ 'H', 'e', 'l', 'l', 'o' ]
