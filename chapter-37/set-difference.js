// 차집합 A-B

Set.prototype.difference = function (set) {
  const result = new Set(this);

  for (const value of set) {
    result.delete(value);
  }
  return result;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA에 대한 setB의 차집합
console.log(setA.difference(setB)); // Set(2) { 1, 3 }
// setB에 대한 setA의 차집합
console.log(setB.difference(setA)); // Set(0) {}

// 다른 방법
Set.prototype.difference2 = function (set) {
  return new Set([...this].filter((v) => !set.has(v)));
};

console.log(setA.difference2(setB)); // Set(2) { 1, 3 }
