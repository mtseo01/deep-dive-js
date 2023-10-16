// Promise.all()은 배열 내 요소 중 어느 하나라도 거부하면 즉시 거부합니다. 예를 들어, 일정 시간이 지난 이후 이행하는 네 개의 프로미스와, 즉시 거부하는 하나의 프로미스를 전달한다면 Promise.all()도 즉시 거부합니다.
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('하나'), 1000);
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('둘'), 2000);
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('셋'), 3000);
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('넷'), 4000);
});
var p5 = new Promise((resolve, reject) => {
  reject(new Error('거부'));
});

// .catch 사용:
Promise.all([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error.message);
  });

// 콘솔 출력값:
// "거부"
