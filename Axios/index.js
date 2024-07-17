import axios from "axios";
//METODO GET
function getUsers() {
    // Devolver la promesa directamente
    return axios.get('https://jsonplaceholder.typicode.com/users', {
        params: {
            _limit: 2,
        }

    });
}

getUsers()
    .then((response) => {
        console.log(response.data); // Acceder a la propiedad `data` del objeto `response`
    }).catch((error) => {
        console.log(error);
    });

//METODO POST
function createUsers() {
    // Devolver la promesa directamente
    return axios.post('https://reqres.in/api/register', {

        "email": "eve.holt@reqres.in",
        "password": "pistol"

    });
}

createUsers()
    .then((response) => {
        console.log(response.data); // Acceder a la propiedad `data` del objeto `response`
    }).catch((error) => {
        console.log(error);
    });