const fetchBtn = document.getElementById('fetch-btn');
const fetchBtn2 = document.getElementById('fetch-btn2');

fetchBtn.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
      console.log(error);
    });
});

// async await 사용
fetchBtn2.addEventListener('click', async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/2'
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

// query params 사용법

// axios 방법. 간단하다..
const axiosParams = async () => {
  try {
    const res = await axios.get(url, { params: { ID: 'test1', NUMBER: 3 } });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

// fetch 방법. 복잡하다..
let params = {
  param1: 'value1',
  param2: 'value2',
};

let query = Object.keys(params)
  .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
  .join('&');

let url = 'https://example.com/search?' + query;

try {
  const res2 = await fetch(url);
  const data = await res2.json();
  console.log(data);
} catch (error) {
  console.log(error);
}
