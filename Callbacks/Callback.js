//CALLBACK(dentro de una funcion, mandamos a llamar a otra funcion)

function myFunction() {
    console.log("Soy una funcion simple.")
}



function myFunction1() {
    console.log("Soy una funcion1 simple.")
}

//TIPO CALLBACK

function imprimir(mensaje) {
     console.log(mensaje);
}

function suma(a, b, fcallback) {
    let resultado = a + b;
    fcallback(`Resultado: ${ resultado} `);
}
//LLAMADA DE FUNCIONES
//Las llamdas son secuenciales.
myFunction();
myFunction1();
suma(10, 10, imprimir);