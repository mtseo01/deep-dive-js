// 전역 렉시컬 환경
const x = 1;
const y = 1;
const z = 1;

function func1(a) {
  // func1 렉시컬 환경
  // a = 1, y = 2, z = 2
  const y = 2;
  const z = 2;

  function func2(b) {
    // func2 렉시컬 환경
    // b = 2, z = 3
    const z = 3;

    console.log('3', x, y, z, b); // 1 2 3 2
    // x는 전역 렉시컬, y는 func1 외부 렉시컬 환경 참조
  }

  console.log('2', x, y, z, a); // 1 2 2 1
  // x는 전역 렉시컬 환경 참조
  func2(a + 1);
}

console.log('1', x, y, z); // 1 1 1
func1(1);
