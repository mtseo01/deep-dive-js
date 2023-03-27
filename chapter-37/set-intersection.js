// 교집합 A∩B
Set.prototype.intersection = function (set) {
  const result = new Set();

  for (const value of set) {
    if (this.has(value)) result.add(value);
  }
  return result;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA와 setB의 교집합
console.log(setA.intersection(setB)); // Set(2) { 2, 4 }

// setB와 setA의 교집합
console.log(setB.intersection(setA)); // Set(2) { 2, 4 }

// 다른 방법

Set.prototype.intersection2 = function (set) {
  return new Set([...this].filter((v) => set.has(v)));
};

console.log(setA.intersection2(setB)); // Set(2) { 2, 4 }
