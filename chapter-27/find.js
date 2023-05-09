// Array.prototype.find

const users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 3, name: 'Choi' },
  { id: 4, name: 'Park' },
];

// id가 2인 첫 번째 요소를 반환한다. find 메서드는 배열이 아니라 요소를 반환한다.
const selectedUser = users.find((user) => user.id === 2);
console.log(selectedUser); // { id: 2, name: 'Kim' }
