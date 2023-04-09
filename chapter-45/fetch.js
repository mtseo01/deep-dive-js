const fetchBtn = document.getElementById('fetch-btn');

fetchBtn.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
      console.log(error);
    });
});
