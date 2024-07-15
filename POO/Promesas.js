//PROMESAS 
/*Las promesas en JavaScript son una forma de manejar operaciones asíncronas de manera más clara y estructurada.
 Antes de las promesas, las operaciones asíncronas se manejaban principalmente con callbacks, lo cual podía llevar 
 a situaciones de código anidado y difícil de seguir, conocido como "callback hell". Las promesas fueron introducidas
  para resolver estos problemas y ofrecer un flujo más controlado y legible en el código. */

/*Una promesa representa un valor que puede estar disponible ahora, en el futuro o nunca. Esencialmente, 
es un objeto que representa la eventual finalización o falla de una operación asíncrona y su valor resultante. */


/*Estados de una promesa:
Una promesa puede encontrarse en uno de los tres estados:

Pending (pendiente): Estado inicial, la promesa aún no se ha cumplido ni rechazado.

Fulfilled (cumplida): La operación asíncrona se completó con éxito y se cumplió la promesa. 
En este estado, la promesa tiene un valor asociado que se puede usar en el siguiente paso del proceso.

Rejected (rechazada): La operación asíncrona falló o fue rechazada por algún motivo. 
En este estado, la promesa tiene un motivo (reason) que indica por qué falló la operación. */


let miPromesa = new Promise((resolve, reject) => {


    // Supongamos que la operación fue exitosa
    let exito = true;

    if (exito) {
        resolve("Operación exitosa"); // Resuelve la promesa con un valor
    } else {
        reject("Operación fallida"); // Rechaza la promesa con un motivo
    }

});
miPromesa.then((resultado) => {
    console.log("Éxito:", resultado); // Operación exitosa
}).catch((error) => {
    console.error("Error:", error); // Operación fallida
});



