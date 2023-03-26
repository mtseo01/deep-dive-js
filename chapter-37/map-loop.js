// 요소 순회 (Map.prototype.forEach)
// 첫 번째 요소 : 현재 순회 중인 요소 값, 두 번째 : 현재 순회 중인 요소 키, 세 번째 : 현재 순회 중인 Map 객체 자체
const lee = { name: 'lee' };
const kim = { name: 'kim' };

const map = new Map([
  [lee, 'developer'],
  [kim, 'designer'],
]);

map.forEach((v, k, map) => console.log(v, k, map));
/*
developer { name: 'lee' } Map(2) {
  { name: 'lee' } => 'developer',
  { name: 'kim' } => 'designer'
}
designer { name: 'kim' } Map(2) {
  { name: 'lee' } => 'developer',
  { name: 'kim' } => 'designer'
}
*/

// Map 객체는 이터러블이다. 따라서 for ... of 문으로 순회, 스프레드 문법, 배열 디스트럭처링 가능

console.log(Symbol.iterator in map); // true

for (const entry of map) {
  console.log(entry);
  // [ { name: 'lee' }, 'developer' ] [ { name: 'kim' }, 'designer' ]
}

console.log([...map]);
// [ [ { name: 'lee' }, 'developer' ], [ { name: 'kim' }, 'designer' ] ]

// 이터레이터인 객체를 반환하는 메서드
for (const key of map.keys()) {
  console.log(key);
  // { name: 'lee' } { name: 'kim' }
}

for (const value of map.values()) {
  console.log(value);
  // developer designer
}

for (const entry of map.entries()) {
  console.log(entry);
  // [ { name: 'lee' }, 'developer' ] [ { name: 'kim' }, 'designer' ]
}
