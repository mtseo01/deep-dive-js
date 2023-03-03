/**
 * 8장 제어문 (control flow state)
 * 조건에 따라 코드 블록을 실행하거나 반복 실행할 때 사용한다.
 */

/**
 * 8.3.2 while 문
 * for 문은 반복 횟수가 명확할 때 주로 사용하고 while문은 반복 횟수가 불명확할 때 주로 사용한다.
 */
let count = 0;
while (true) {
  console.log(count);
  count++;
  if (count === 3) break;
} // 0 1 2

/**
 * 8.3.3 do... while 문
 * 코드 블록을 먼저 실행하고 조건식을 평가한다. 따라서 코드 블록은 무조건 한 번 이상 실행된다.
 */
let count2 = 0;
do {
  console.log(count2);
  count2++;
} while (count2 < 3);

/**
 * break 문
 * 레이블 문, 반복문(for, for...in, for...of, while, do...while) 또는 switch 문의
 * 코드 블록을 탈출한다. 이 외에서 break 문을 사용하면 SyntaxError가 발생한다.
 * 레이블 문은 중첩된 for 문 외부로 탈출할 땐 유용하지만 그 밖의 경우에는 일반적으로 권장하지 않는다.
 */

let string = 'Hello World.';
let serach = 'l';
let index;

for (let i = 0; i < string.length; i++) {
  if (string[i] === serach) {
    index = i;
    break;
  }
}
console.log(index); // 2
console.log(string.indexOf(serach)); // 2
