//PROMESAS EJEMPLO:

const promise = new Promise((resolve, reject) => {

    const randomNumber = Math.random();
    console.log(randomNumber);

    if (randomNumber > 0.5) {
        resolve(`True:${randomNumber}`);
    } else {
        reject(`False:${randomNumber}`);
    }

});

promise.then((result) => {
    console.log("La promesa se resolvió:", result);
})
promise.catch((error) => {
    console.log("La promesa fue rechazada:", error);
});