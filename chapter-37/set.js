// Set 생성자 함수는 이터러블을 인수로 전달 받아 Set 객체를 생성한다.
// 이때 이터러블의 중복된 값은 Set 객체에 요소로 저장되지 않는다.

const set1 = new Set([1, 2, 3, 3]);
console.log(set1); // Set(3) { 1, 2, 3 }

const set2 = new Set('hello');
console.log(set2); // Set(4) { 'h', 'e', 'l', 'o' }

// 요소 개수 확인 (Set.prototype.size)
const { size } = new Set([1, 2, 3, 3]);
console.log(size); // 3

// 요소 추가 (Set.prototype.add)
const set3 = new Set();
console.log(set3); // Set(0) {}

set3.add(1);
console.log(set3); // Set(1) { 1 }

// 요소 존재 여부 확인 (Set.prototype.has)
console.log(set3.has(1)); // true
console.log(set3.has(4)); // false

// 요소 삭제 (Set.prototype.delete)
const set4 = new Set([1, 2, 3]);
set4.delete(2);
console.log(set4); // Set(2) { 1, 3 }

// 요소 일괄 삭제
const set5 = new Set([1, 2, 3, 4]);
set5.clear();
console.log(set5); // Set(0) {}
