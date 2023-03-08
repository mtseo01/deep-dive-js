// 객체(참조) 타입의 값은 변경 가능한 값이다.

let person = {
  name: 'Lee',
};

// 프로퍼티 값 갱신
person.name = 'Kim';

// 프로퍼티 동적 생성
person.address = 'Seoul';

console.log(person); // { name: 'Kim', address: 'Seoul' }

let copy = person;

// 참조 값을 복사(얕은 복사). copy와 person은 동일한 참조 값을 갖는다.
console.log(copy === person); // true

copy.name = 'Choi';
copy.address = 'Busan';

// copy와 person은 동일한 객체를 가리킨다.
// 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고 받는다.
console.log(person); // { name: 'Choi', address: 'Busan' }
console.log(copy); // { name: 'Choi', address: 'Busan' }
