// JSON.parse

// 서버로부터 클라이언트에게 전송된 JSON 데이터는 문자열ㅇ이다. 이 문자열을 객체로서 사용하려면 JSON 포맷의 문자열을 객체화해야 하는데 이를 역직렬화라 한다.

const obj = {
  name: 'kim',
  age: 20,
  alive: true,
  hobby: ['tennis', 'traveling'],
};

// 객체를 JSON 포맷의 문자열로 변환한다.
const json = JSON.stringify(obj);

// JSON 포맷의 문자열을 객체로 변환한다.
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed); // object { name: 'kim', age: 20, alive: true, hobby: [ 'tennis', 'traveling' ] }
