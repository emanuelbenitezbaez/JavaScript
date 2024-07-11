//MANEJO DE ERRORES

//TRY CATCH FINALLY

'use strict';
//Usamos el modo strict el cual no permite invocar variables O FUNCIONES no definidas, esto va a lanzar un error.

//EN EL TRY INICIALIZAMO LA VARIABLE QUE VA A ARROJAR UN ERROR Y SERA ATRAPADO EN EL CATCH.
try {
     x = 10;
    myFuction();
} catch (error) {//EL ERROR ES RECIBIDO POR PARAMETRO Y SE IMPRIME.
    console.log(error);
} finally{
    console.log("Se ejecuta sin importar si hay error o no. independientemente del error que arroje.")
}
//SIGUE LA EJECUCION DEL PROGRAMA. SIN EL TRY CATCH NO SEGUIIRIA EJECUNTANDO NUESTRO PROGRAMA.
console.log("Se sigue ejecutando el programa. ");