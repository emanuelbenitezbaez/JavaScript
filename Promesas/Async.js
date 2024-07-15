/*Async/Await:
Para hacer el código aún más fácil de leer y escribir, puedes usar async y await, 
que son características de ES2017 (ES8) que simplifican el uso de promesas. 
async define una función que retorna una promesa y await espera a que una promesa 
se resuelva antes de continuar con la ejecución de la función. */

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


async function miFuncionAsincrona() {
    try {
        let resultado = await miPromesa;
        console.log("Éxito:", resultado);
    } catch (error) {
        console.error("Error:", error);
    }
}

miFuncionAsincrona();
