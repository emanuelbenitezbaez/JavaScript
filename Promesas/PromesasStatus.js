//PROMESAS EJEMPLO:
//FUNCION QUE DEVUELVE UNA PROMESA Y OBTENER INFO DE QUE DEVUELVE O PORQUE FUE RECHAZADO.
console.log("Comienza el programa");

const funcionPromesa = (url) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const paginas = {
                '/users': [
                    { id: 1, name: `Juan` },

                    { id: 2, name: `Carlos` }

                ],
                '/about': `Esta pagina es de...`

            };
            const datos = paginas[url];

            if (datos) {
                resolve({ status: 200, datos });
            } else {
                reject({ status: 404, datos });
            }

        }, 4000);
    });

}

funcionPromesa('/about').then((result) => {
    console.log(`TRUE`);
    console.log('La promesa se resolvió:', result.status);
    console.log('Datos obtenidos:', result.datos);
}).catch((error) => {
    console.log(`FALSE`);
    console.log('La promesa fue rechazada:', error.status);
    console.log('Datos obtenidos:', error.datos);
})
console.log("Sigue ejecutando el programa");

console.log("Sigue ejecutando el programa");

console.log("Sigue ejecutando el programa");