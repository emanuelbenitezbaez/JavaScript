//LLAMADA A SETTIMEOUT USANDO PROMESAS
let miPromesa = new Promise((resolve, reject) => {
    // Simular una operación asíncrona (por ejemplo, una petición AJAX)
    setTimeout(() => {
        // Supongamos que la operación fue exitosa
        let exito = true;

        if (exito) {
            resolve("Operación exitosa"); // Resuelve la promesa con un valor
        } else {
            reject("Operación fallida"); // Rechaza la promesa con un motivo
        }
    }, 2000); // Simulamos un retardo de 2 segundos
});

miPromesa.then((resultado) => {
    console.log("Éxito:", resultado); // Operación exitosa
}).catch((error) => {
    console.error("Error:", error); // Operación fallida
});
