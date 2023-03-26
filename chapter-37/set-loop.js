// 요소 순회 (Set.prototype.forEach)
// 첫 번째 인수: 현재 순회 중인 요소값, 두 번째 : 현재 순회 중인 요소값, 세 번째 : 현재 순회 중인 Set 객체 자체

const set = new Set([1, 2, 3]);
set.forEach((v, v2, set) => console.log(v, v2, set));
/*
1 1 Set(3) { 1, 2, 3 }
2 2 Set(3) { 1, 2, 3 }
3 3 Set(3) { 1, 2, 3 }
*/

// Set 객체는 이터러블이다. 따라서 for ... of 문으로 순회, 스프레드 문법, 배열 디스트럭처링 가능
const set2 = new Set([1, 2, 3]);
for (const value of set2) {
  console.log(value); // 1 2 3
}

console.log([...set2]); // [ 1, 2, 3 ]

const [a, ...rest] = set2;
console.log(a, rest); // 1 [ 2, 3 ]
