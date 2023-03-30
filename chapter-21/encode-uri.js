// encode uri
const uri = 'http://example.com?name=홍길동&job=hero';

const enc = encodeURI(uri);
console.log(enc); // http://example.com?name=%ED%99%8D%EA%B8%B8%EB%8F%99&job=hero

const dec = decodeURI(uri);
console.log(dec); // http://example.com?name=홍길동&job=hero

// encode uri component
// 쿼리 스트링 구분자로 사용되는 =, ?, &까지 인코딩한다.
const uriComp = 'name=홍길동&job=hero';

let encode = encodeURIComponent(uriComp);
console.log(encode); // name%3D%ED%99%8D%EA%B8%B8%EB%8F%99%26job%3Dhero
