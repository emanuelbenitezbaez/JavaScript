//FUNCIONES
//UNA FUNCION ES UN BLOQUE DE CODIGO REUTILIZABLE
//PUEDEN TENER PARAMETROS DE ENTRADA Y PUEDEN DEVOLVER UN VALOR DE SALIDA.
//TANTO LOS VALORES DE ENTRADA Y SALIDA SON OPCIONALES.
//TIPOS DE FUNCIONES
//FUNCIONES DEFINIDAS POR EL USUARIO
//FUNCIONES INCORPORADAS:  YA DEFINIDAS POR EL LENGUAJE(BUILT-IN)
//ESTAS FUNCIONES ESTAN DEFINIDAS DENTRO DE CLASES. PARA LLAMARLAS DEBEMOS SABER EL NOMBRE DE LA CLASE Y SU METODO.



//DEFINIENDO FUNCIONES

function imprimir (cadena){
console.log(cadena.toLowerCase());
    }

    imprimir('Hello, WORLD!')

//DIFERENCIA ENTRE PARAMETROS Y ARGUMENTOS

//LOS PARAMETROS SON VARIABLES LOCALES A NUESTRO METODO
//LOS ARGUMENTOS SON LAS VARIABLES QUE LE PASAMOS A LA FUNCION CUANDO SE LA INVOCA.
//EJEMPLO


//FUNCION QUE RECIBE 2 NUMEROS, LOS MULTIPLICA Y DEVUELVE SU RESULTADO
function multiplication(number1,number2){
return number1 * number2;
}


//INVOCAMOS A LA FUNCION PASANDOLE 2 NUMEROS COMO ARGUMENTOS

let number1=100;
let number2=100;

console.log(multiplication(number1,number2));
