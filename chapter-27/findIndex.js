// Array.prototype.findIndex

const users = [
  { id: 1, name: 'kim' },
  { id: 2, name: 'choi' },
  { id: 3, name: 'bae' },
  { id: 4, name: 'seo' },
];

const index = users.findIndex((user) => user.id === 1);
console.log(index); // 0

users.splice(index, 1);
console.log(users);
/** 
[
  { id: 2, name: 'choi' },
  { id: 3, name: 'bae' },
  { id: 4, name: 'seo' }
] 
*/
