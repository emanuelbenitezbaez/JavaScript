//AXIOS: solicitud HTTP tipo PATCH utilizando la librería Axios en JavaScript
//Creamos la funcion patch
function del() {
    //Utilizo Axios para hacer una solicitud PATCH a la URL https://jsonplaceholder.typicode.com/users/1.
    axios.delete('https://jsonplaceholder.typicode.com/users/1'
    ).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
}
//Llamada de la funcion.
del();
