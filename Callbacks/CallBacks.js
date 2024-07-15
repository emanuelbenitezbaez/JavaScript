//CALLBACK
/*
una función que se pasa como argumento a otra función.
 La función que recibe la función callback la ejecutará 
 en algún momento dado, generalmente después de que haya 
 completado una operación o recibido una respuesta a una 
 solicitud.

*/
/*
Funciones como valores: En JavaScript, las funciones son 
ciudadanos de primera clase, lo que significa que se pueden
 manejar como cualquier otro valor (como números o cadenas).
  Esto incluye pasar funciones como argumentos a otras funciones.

Definición de función callback: Una función callback es una 
función que se pasa como argumento a otra función y se invoca
 dentro de esa función. No es ejecutada inmediatamente al ser 
 pasada como argumento, sino que es "llamada de vuelta" en algún
  momento posterior, a menudo cuando ocurre un evento o se completa una tarea.

Ejemplo simple: Imagina una función hacerAlgo() que acepta dos argumentos: 
uno es una función regular (callback) y otro es un valor (datos).
 La función hacerAlgo() realiza algún trabajo y luego llama a callback con el resultado:
*/
function hacerAlgo(datos, callback) {
    // Hacer algo con los datos
    let resultado = datos + 10;

    // Llamar al callback, pasándole el resultado
    callback(resultado);
}
/*
Uso de la función callback: Ahora, cuando llamamos a hacerAlgo(), podemos pasar una función 
como callback. Esta función será ejecutada con el resultado cuando hacerAlgo() termine su tarea:
*/
function miCallback(resultado) {
    console.log("El resultado es: " + resultado);
}

hacerAlgo(5, miCallback);  // Imprimirá: El resultado es: 15

/*
En este ejemplo, miCallback es la función que pasamos como argumento a hacerAlgo().
 Después de que hacerAlgo() calcule datos + 10, llama a miCallback(resultado), 
 que simplemente imprime el resultado. 
 */
/*
En resumen, una función callback en JavaScript es una forma de asegurar que cierto 
código se ejecute solo después de que otra función haya terminado su tarea, permitiendo 
así un comportamiento asíncrono y flexible en la programación.
*/ 