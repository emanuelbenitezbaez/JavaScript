//PROMESAS EJEMPLO:
//FUNCION QUE DEVUELVE UNA PROMESA Y OBTENER INFO DE QUE DEVUELVE O PORQUE FUE RECHAZADO.
console.log("Comienza el programa");

const funcionPromesa = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const paginas = {
                '/users': [
                    { id: 1, name: 'Juan' },
                    { id: 2, name: 'Carlos' }
                ],

                '/users/1': {
                    id: 1,
                    name: 'Juana',
                    surname: 'Darco',
                    edad: 35,
                    ultimaNota: 1234
                },

                '/users/2': {
                    id: 2,
                    name: 'Maria',
                    surname: 'Daco',
                    edad: 35,
                    ultimaNota: 4567
                },
                '/notas/1234': {
                    id: 1234,
                    titulo: 'Como emigrar.'
                },
                '/notas/4567': {
                    id: 4567,
                    titulo: 'Como bajar de peso rapido.'
                },
                '/about': 'Esta página es de...'
            };
            const datos = paginas[url];

            if (datos) {
                return resolve({ status: 200, datos });
            } else {
                return reject({ status: 404 });
            }
        }, 2000);
    });
};

funcionPromesa('/users')
    .then((result) => {
        const id = result.datos[1].id; // Acceso directo al objeto datos de /users/1
        console.log('ID obtenido:', id);
        return funcionPromesa(`/users/${id}`); // Llamar a funcionPromesa con el ID obtenido

    })
    .then((result) => {
        const ultimaNota = result.datos.ultimaNota;
        console.log('Nota :', ultimaNota);
        return funcionPromesa(`/notas/${ultimaNota}`);
    })
    .then((result) => {
        console.log(result.datos.titulo);
    })
    .catch((error) => {
        console.log(error.status);
    });



















console.log("Sigue ejecutando el programa");

console.log("Sigue ejecutando el programa");

console.log("Sigue ejecutando el programa");