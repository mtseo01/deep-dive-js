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
