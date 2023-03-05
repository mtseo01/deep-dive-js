// 9.2 암묵적 타입 변환 implicit-coercion (타입 강제 변환 type coercion)

// 9.2.1 문자열 타입으로 변환

1 + '2'; // -> "12"
// + 연산자는 피연산자 중 하나 이상이 문자열이므로 문자열 연결 연산자로 동작한다.

`1 + 1 = ${1 + 1}`; // -> "1 + 1 = 2"

// 숫자 타입
console.log(0 + ''); // -> "0"
console.log(-0 + ''); // -> "0"
console.log(1 + ''); // -> "1"
console.log(NaN + ''); // -> "NaN"

// 불리언 타입
console.log(true + ''); // -> "true"
console.log(false + ''); // -> "false"

// null 타입
console.log(null + ''); // -> "null"

// 심벌 타입
// console.log(Symbol() + ''); // -> TypeError: Cannot convert a Symbol value to a string

// 객체 타입
console.log({} + ''); // -> "[object Object]"
console.log(Math + ''); // -> "[object Math]"
console.log([] + ''); // -> ""
console.log([10, 20] + ''); // -> "10,20"
console.log(function () {} + ''); // -> "function () {}"
console.log(Array + ''); // -> "function Array() { [native code] }"

// 9.2.2 숫자 타입으로 변환

console.log(1 - '1'); // -> 0
console.log(1 * '10'); // -> 10
console.log(1 / 'one'); // -> NaN
// 산술 연산자의 역할은 숫자 값으로 만드는 것이다.

console.log('1' > 0); // -> true
// 비교 연산자의 피연산자 중에서 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.

// 문자열 타입
console.log(+''); // -> 0
console.log(+'0'); // -> 0
console.log(+'1'); // -> 1
console.log(+'string'); // -> NaN

// 불리언 타입
console.log(+true); // -> 1
console.log(+false); // -> 0

// null 타입
console.log(+null); // -> 0

// undefined 타입
console.log(+undefined); // -> NaN

// 객체 타입
console.log(+{}); // -> NaN
console.log(+[]); // -> 0
console.log(+[10, 20]); // -> NaN
