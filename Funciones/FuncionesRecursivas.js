//FUNCIONES RECURSIVAS: BASICAMENTE ES UNA FUNCION QUE SE LLAMA A SI MISMA.
//REGLAS DE UNA FUNCION RECURSIVA:
//1- SE LLAMA A SI MISMA.
//2-TIENE QUE AVANZAR HACIA UN CASO BASE PARA NO CAER EN CICLO INFINITO.(NOS DICE QUE PODEMOS TERMINAR CON LA RECURSIVIDAD.)

//EJEMPLO funcion recursiva que entra en bucle infinito 

function imprimir(x) {

    console.log(x);
    imprimir(x - 1);
}
//imprimir(1);

//EJEMPLO CORRECTO
function imprimir(x) { //x=5
    if (x > 0) { //x=4
        console.log(x);
        imprimir(x - 1);
        console.log(x);
    }

}
imprimir(10);
console.log(`Fin del programa:`);


function factorial(n) {
    if (n === 0) { //caso base 
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));

function fibonacci(n) {
    if (n <= 1) { //caso base 
        return n;
    } else {
        return (fibonacci(n - 1) + fibonacci(n - 2));
    }
}
console.log(fibonacci(5));