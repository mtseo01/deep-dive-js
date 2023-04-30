// 옵셔널 체이닝 연산자 ?.는 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고,
// 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

const elem = null;

const value = elem?.value;
console.log(value); // undefined

const elem2 = {
  item: 'test',
};

const value2 = elem2?.item;
const value3 = elem2?.item2;

console.log(value2); // test
console.log(value3); // undefined
