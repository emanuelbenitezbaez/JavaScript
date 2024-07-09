//MANEJO DE ERRORES
/*
El manejo de errores en JavaScript es fundamental para escribir código robusto y manejar situaciones 
inesperadas de manera controlada. Aquí te explico los conceptos básicos:

Tipos de Errores en JavaScript
Errores de Sintaxis: Ocurren cuando la estructura del código no es válida y el intérprete no puede 
interpretarlo correctamente.
*/

/*
Errores de Tiempo de Ejecución (Runtime Errors): Estos errores ocurren durante la ejecución del programa
 y pueden ser causados por entradas incorrectas, manipulación de objetos inexistentes, entre otros.
*/
let obj = {};
obj.method(); // Error en tiempo de ejecución: 'method' no está definido en obj


//Manejo de Errores
//En JavaScript, se utiliza la estructura try...catch...finally para manejar errores de manera controlada:

try {
    // Código que podría lanzar un error
    let result = someFunction();
} catch (error) {
    // Código para manejar el error
    console.error('Ha ocurrido un error:', error.message);
} finally {
    // Código opcional que se ejecuta siempre, con o sin error
    console.log('Finalizando operación');
}

/*
try: Contiene el bloque de código que puede lanzar una excepción.
catch: Captura la excepción lanzada en el bloque try. error es la variable que contiene el objeto de error.
finally: Opcionalmente, se ejecuta siempre después de try y catch, ya sea que haya ocurrido un error o no. 
Se utiliza comúnmente para limpiar recursos o finalizar operaciones.
*/