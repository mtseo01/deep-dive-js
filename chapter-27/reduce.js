// reduce
[0, 1, 2, 3, 4].reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  return accumulator + currentValue;
});

let arr = [1, 2, 3, 4, 5];
let a = arr.reduce(function (preValue, currentValue) {
  return preValue + currentValue;
});

console.log(a); // 15
