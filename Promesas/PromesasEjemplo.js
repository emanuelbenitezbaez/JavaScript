//PROMESAS EJEMPLO:
console.log("Comienza el programa");

const funcionPromesa = () => {

    return promise = new Promise((resolve, reject) => {

        setTimeout(() => {

            const randomNumber = Math.random();
            console.log(randomNumber);

            if (randomNumber > 0.5) {
                resolve({status: 200});
            } else {
                reject({status: 404});
            }
        },5000);
    });
}

funcionPromesa().then((result) => {
    console.log("La promesa se resolvió:", result);
    
    console.log("La promesa fue rechazada:", result.status);
}).catch((error) => {
    console.log("La promesa fue rechazada:", error);
    
    console.log("La promesa fue rechazada:", error.status);
});

console.log("Sigue ejecutando el programa");

console.log("Sigue ejecutando el programa");

console.log("Sigue ejecutando el programa");