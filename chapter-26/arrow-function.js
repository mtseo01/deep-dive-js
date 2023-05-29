// arrow-function
// 정의
const multiply = (x, y) => x * y;
multiply(3, 2);

// 선언
// 1. 매개변수가 여러 개인 경우 소괄호 () 안에 매개변수를 선언한다.
const arrow = (x, y) => {};

// 2. 매개변수가 한 개인 경우 소괄호 ()를 생략할 수 있다.
const arrow2 = (x) => {};

// 3. 매개변수가 없는 경우 소괄호 ()를 생략할 수 없다.

// 몸체 정의
// 함수 몸체가 하나의 문으로 구성된다면 함수 몸체를 감싸는 중괄호를 생략할 수 있다.
// concise body
const power = (x) => x ** 2;
// block body ( 위 표현과 같다. )
const power2 = (x) => {
  return x ** 2;
};

// 객체 리터럴을 반환하는 경우 객체 리터럴을 소괄호 ()로 감싸 주어야 한다.
const create = (id, content) => ({ id, content });
create(1, 'JavaScript'); // {id: 1, content: 'JavaScript'}

// 위 표현은 다음과 동일하다.
const create2 = (id, content) => {
  return { id, content };
};
