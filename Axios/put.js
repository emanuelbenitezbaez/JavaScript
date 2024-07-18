//AXIOS: solicitud HTTP tipo PUT utilizando la librería Axios en JavaScript
//Creamos la funcion put y 
function put() {
    //Utilizo Axios para hacer una solicitud PUT a la URL https://jsonplaceholder.typicode.com/users/1.
    axios.put('https://jsonplaceholder.typicode.com/users/1', {
        //En el cuerpo de la solicitud PUT, envía un objeto JSON
        //Esto está actualizando los datos del usuario con ID 1 en el servicio JSONPlaceholder.
        "name": "Emanuel",
        "username": "Benitez Baez",
    }).then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
    })
}
//Llamada de la funcion.
put();
