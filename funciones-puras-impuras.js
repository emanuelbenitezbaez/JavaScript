//FUNCIONES PURAS.
//TIENEN 2 CARACTERISTIAS FUNDAMENTALES.

//1 - DADA UNA MISMA ENTRADA VA A TENER SIEMPRE LA MISMA SALIDAS.
//2 - NO PRODUCEN EFECTOS SECUNDARIOS.(A LO LARGO DEL TIEMPO CAMBIAN LAS FORMAS DE ESCRIBIR EL  CODIGO)

//EFECTOS SECUNDARIOS QUE HACEN QUE NUESTRA FUNCION DEJEN DE SER PURAS.
//1- MODIFICAR VARIABLES GLOBALES.
//2- MODIFICAR PARAMETROS DE NUESTRA FUNCION.
//3- LLAMADOS A APIS O SOLICITUDES HTTPS.
//4- IMPRIMIR MENSAJES EN PANTALLA O CONSOLA.
//5- MANIPULACION DEL DOM.
//6- ACCEDER U OBTENER HORA/DIAS.

/*
Funciones Puras:

Una función pura es aquella que, dado el mismo conjunto de entradas, siempre produce el mismo resultado y no tiene efectos secundarios observables fuera de la función.
No dependen de nada más que de sus argumentos, y no modifican ningún estado fuera de su ámbito.
Son predecibles y fáciles de probar porque no introducen cambios inesperados en el programa.
*/

//ESTRUCTURA DE UNA FUNCION PURA.

function sum(a,b){
return a + b;
}

//ESTRUCTURA DE UNA FUNCION PURA , TENEMOS SIEMPRE LA MISMA ENTRADA Y SALIDA.

function square(a){
    return a * a ;
}
console.log(square(10));

//ESTRUCTURA DE UNA FUNCION PURA , TENEMOS SIEMPRE LA MISMA ENTRADA Y SALIDA.
function addTen(y){
    return y + 10 ;
}
console.log(addTen(10));



//FUNCION PURA
const number = 10;
const finalResult = addTen(square(number))
console.log(finalResult);


/*
Funciones Impuras:

Una función impura es aquella que puede tener efectos secundarios observables fuera de la función o no producir el mismo resultado para el mismo conjunto de entradas.
Pueden acceder o modificar variables fuera de su ámbito, realizar operaciones de entrada/salida, realizar mutaciones de estado, etc.
Son menos predecibles y más difíciles de probar porque pueden producir resultados diferentes en diferentes contextos.
*/
//ESTRUCTURA DE UNA FUNCION IMPURA.

function sum(a,b){
    console.log(a);
    return a + b;
    }

//FUNCION CON MODIFICACION DE VARIABLE GLOBAL.

let total=0;
function modificationVariable(a){
    return total = total + a;

}

console.log(modificationVariable(10));



