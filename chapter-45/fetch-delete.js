const deleteBtn = document.getElementById('delete-btn');

deleteBtn.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});

const deleteBtn2 = document.getElementById('delete-btn2');

deleteBtn2.addEventListener('click', async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
});
