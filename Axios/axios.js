//AXIOS
const personajes = axios.get('https://swapi.dev/api/people/')
.then((response) => {
    console.log(response.data.results); // Acceder a la propiedad `data.results` del objeto `response`

    
}).catch((error) => {
    console.log(error);
});