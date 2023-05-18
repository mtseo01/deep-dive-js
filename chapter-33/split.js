// String.prototype.split

const str = 'How are you doding?';

// 공백으로 구분(단어로 구문)하여 배열로 반환한다.
console.log(str.split(' ')); // [ 'How', 'are', 'you', 'doding?' ]

// \s는 여러 가지 공백 문자(스페이스, 탭 등)을 의미한다.
console.log(str.split(/\s/)); //[ 'How', 'are', 'you', 'doding?' ]

// 인수로 빈 문자열을 전달하면 각 문자를 모두 분리한다.
console.log(str.split(''));
/* 
[
  'H', 'o', 'w', ' ', 'a',
  'r', 'e', ' ', 'y', 'o',
  'u', ' ', 'd', 'o', 'd',
  'i', 'n', 'g', '?'
]
*/

// 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.
console.log(str.split()); // [ 'How are you doding?' ]

// 문자열 역순으로 반환
console.log(str.split('').reverse().join('')); // ?gnidod uoy era woH
