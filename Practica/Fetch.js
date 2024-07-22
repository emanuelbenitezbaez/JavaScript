fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error de solicitud');
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
