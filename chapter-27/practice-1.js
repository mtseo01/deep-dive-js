const dummyArr = ['테스트', '#태그입니다', '공부', '공스타', '#코딩구'];

const unitedArr = dummyArr.map((keyword) => {
  if (!keyword.startsWith('#')) {
    return `#${keyword}`;
  } else {
    return keyword;
  }
});

console.log(unitedArr);
