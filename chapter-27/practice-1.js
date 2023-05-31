const dummyArr = ['테스트', '#태그입니다', '공부', '공스타', '#코딩구'];

const unitedArr = dummyArr.map((keyword) => {
  if (!keyword.startsWith('#')) {
    return `#${keyword}`;
  } else {
    return keyword;
  }
});

console.log(unitedArr); // [ '#테스트', '#태그입니다', '#공부', '#공스타', '#코딩구' ]

const dummyArr2 = [
  '테스트',
  '##태그입니다',
  '##공부',
  '###공스타',
  '####코딩구',
];

const unitedArr2 = dummyArr2.map((keyword) => {
  let modifiedKeyword = keyword;
  while (modifiedKeyword.startsWith('#')) {
    modifiedKeyword = modifiedKeyword.slice(1);
  }
  return `#${modifiedKeyword}`;
});

console.log(unitedArr2); // [ '#테스트', '#태그입니다', '#공부', '#공스타', '#코딩구' ]

const dummyArr3 = [
  '테스트',
  '##태그입니다',
  '##공부',
  '###공스타',
  '####코딩구',
];

const unitedArr3 = dummyArr3.map((keyword) => {
  const modifiedKeyword = `#${keyword.replace(/^#+/, '')}`;
  return modifiedKeyword;
});

console.log(unitedArr3);
