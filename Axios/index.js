import axios from "axios";

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
