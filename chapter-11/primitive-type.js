// 원시 타입의 값은 변경 불가능한 값이다.

let str = 'Hello';
// 문자열 'Hello'가 생성되고 식별자 str은 문자열 'Hello'가 저장된 메모리 공간의 첫 번째 메모리 셀 주소를 가리킨다.
str = 'World';
// 이전에 생성된 문자열 'Hello'를 수정하는 것이 아니라 새로운 문자열 'World'를 메모리에 생성하고 식별자 str은 이것(다른 메모리 셀 주소)을 가리킨다.

let score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
let copy = score;

console.log(score, copy); // 80 80
console.log(score === copy); // true

// score 변수와 copy 변수의 값은 다른 메모리 공간에 저장된 별개의 값이다.
// 따라서 score 변수의 값을 변경해도 copy 변수의 값에는 어떠한 영향도 주지 않는다.

score = 100;
console.log(score, copy); // 100 80
console.log(score === copy); // false
