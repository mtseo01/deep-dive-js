const x = 1;

function foo() {
  const x = 10;

  // 상위 스코프는 함수 정의 환경(위치)에 따라 결정된다.
  // 함수 호출 위치와 상위 스코프는 아무런 관계가 없다.

  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1

const y = 1;

function outer() {
  const y = 10;
  const inner = function () {
    console.log(y);
  };
  return inner;
}

const innerFunc = outer();
innerFunc();
