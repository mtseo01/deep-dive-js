// new Date()

const date = new Date();
console.log(date); // 2023-06-08T14:52:24.231Z 객체로 반환

const date2 = Date();
console.log(date2); // Thu Jun 08 2023 23:53:51 GMT+0900 (Korean Standard Time) 문자열로 반환

const day = new Date();

const year = day.getFullYear();
const month = day.getMonth();
const newDate = day.getDate();
const hour = day.getHours();
const min =
  day.getMinutes() < 10 ? `0 + ${day.getMinutes()}` : day.getMinutes();
const sec =
  day.getSeconds() < 10 ? `0 + ${day.getSeconds()}` : day.getSeconds();

const now = `${year}년 ${month}월 ${newDate}월 ${hour}시 ${min}분 ${sec}초`;

console.log(now); // 2023년 5월 9월 0시 46분 51초
