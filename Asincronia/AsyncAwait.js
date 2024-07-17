//ASYNC AWAIT
// Importa la biblioteca Axios
const axios = require('axios');

// Define la función para obtener personajes
function getPersonajes() {
    return axios.get('https://swapi.dev/api/people/');
}

// Llama a la función y maneja la respuesta y los errores
getPersonajes()
    .then((res) => {
        // Itera sobre los personajes y muestra sus nombres
        for (let personaje of res.data.results) { // Nota: es .results, no .result
            console.log(personaje.name);
        }
    })
    .catch((err) => {
        console.log(err);
    });
