//AXIOS: solicitud HTTP tipo PATCH utilizando la librería Axios en JavaScript
//Creamos la funcion patch
function patch() {
    //Utilizo Axios para hacer una solicitud PATCH a la URL https://jsonplaceholder.typicode.com/users/1.
    axios.patch('https://jsonplaceholder.typicode.com/users/1', {
        //En el cuerpo de la solicitud PATCH, envía un objeto JSON
        //Esto está actualizando los datos del usuario con ID 1 en el servicio JSONPlaceholder.
        //Patch modifica parcialmente el objet JSON.
        "name": "Emanuel",
        "username": "Benitez Baez",
    }).then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
    })
}
//Llamada de la funcion.
patch();
