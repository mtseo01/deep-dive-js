// Map 생성자 함수는 이터러블을 인수로 전달 받아 Map 객체를 생성한다. 이때 인수로 전달되는 이터러블은 키와 값의 쌍으로 이루어진 요소로 구겅되어야 한다.
// 중복된 키를 갖는 요소가 존재할 수 없다.
const map1 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);
console.log(map1); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// 요소 개수 확인 (Map.prototype.size)
const { size } = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);
console.log(size); // 2

// 요소 추가 (Map.prototype.set)
const map = new Map();
console.log(map); // Map(0) {}
map.set('key1', 'value1');
console.log(map); // Map(1) { 'key1' => 'value1' }

// 객체는 문자열 또는 심벌 값만 키로 사용할 수 있다. 하지만 Map 객체는 키 타입에 제한이 없다.
// 따라서 객체를 포함한 모든 값을 키로 사용할 수 있다. 이는 Map 객체의 가장 두드러지는 차이점이다.
const map2 = new Map();
const lee = { name: 'Lee' };
const kim = { name: 'kim' };
map2.set(lee, 'developer').set(kim, 'designer');

console.log(map2); // Map(2) {{name: "Lee"}=> "developer", {name: "kim"} => "designer"}

// 요소 존재 여부 확인 (Map.prototype.has)

// 요소 삭제 (Map.prototype.delete)

// 요소 일괄 삭제 (Map.prototype.clear)
