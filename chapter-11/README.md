# 원시 값과 객체의 비교

자바스크립트가 제공하는 7가지 데이터 타입(숫자, 문자열, 불리언, null, undefined, 심벌, 객체 타입)은

크게 _원시 타입_ 과 _객체 타입_ 으로 구분할 수 있다.

- 원시 타입의 값은 _변경 불가능_ 한 값이고, 객체(참조) 타입의 값은 _변경 가능한 값_ 이다.
- 원시 값을 변수에 할당하면 변수(확보된 메모리 공간)에는 _실제 값_ 이 저장되고, 객체를 변수에 할당하면 변수는 _참조 값_ 이 저장된다.
- 원시 값을 갖는 변수를 다른 변수에 할당하면 원본의 원시 값이 복사되어 전달된다. (값에 의한 전달)
- 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달된다. (참조에 의한 전달)