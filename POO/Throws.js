//CLAUSULA THROWS
//CON THROWS NOSOTROS PODEMOS ARROJAR NUESTROS PROPIOS ERRRORES.


try {
    throw 'My error'
    myFuction();
} catch (error) {//EL ERROR ES RECIBIDO POR PARAMETRO Y SE IMPRIME.
    console.log(error);
} finally{
    console.log("Se ejecuta sin importar si hay error o no. independientemente del error que arroje.")
}
//SIGUE LA EJECUCION DEL PROGRAMA. SIN EL TRY CATCH NO SEGUIIRIA EJECUNTANDO NUESTRO PROGRAMA.
console.log("Se sigue ejecutando el programa. ");