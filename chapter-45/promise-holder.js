class Holder {
  constructor() {
    this.promise = null;
    this.resolveFunc = null;
    this.rejectFunc = null;
  }

  hold() {
    this.promise = new Promise((resolve, reject) => {
      this.resolveFunc = resolve;
      this.rejectFunc = reject;
    });
  }

  resolve() {
    if (this.resolveFunc) {
      this.resolveFunc();
      this.promise = null;
    }
  }

  reject() {
    if (this.rejectFunc) {
      this.rejectFunc();
      this.promise = null;
    }
  }
}
// Holder 인스턴스 생성
const holder = new Holder();

// hold 메소드를 호출하여 promise를 생성하고 resolveFunc와 rejectFunc를 할당합니다.
holder.hold();

// 비동기 함수 정의
const asyncFunction = async () => {
  try {
    console.log('Async function started');
    await holder.promise; // 해당 promise가 resolve되기를 기다립니다.
    console.log('Async function resumed after resolving Holder promise');
  } catch (error) {
    console.error('Async function caught an error:', error);
  }
};

// 비동기 함수 실행
asyncFunction();

// 몇 초 후에 resolve 또는 reject 호출
setTimeout(() => {
  holder.resolve(); // 비동기 함수의 진행을 계속합니다.
  // holder.reject(); // 비동기 함수가 오류를 처리하게 합니다.
}, 2000);

// 위의 예제에서는 holder 객체를 사용하여 비동기 함수의 흐름을 제어합니다. holder.hold()를 호출하여 promise를 생성하고, await holder.promise를 사용하여 해당 promise가 해결(resolve)될 때까지 기다립니다. 그리고 setTimeout을 사용하여 2초 후에 holder.resolve() 또는 holder.reject()를 호출하여 해당 비동기 함수의 실행을 처리합니다.
