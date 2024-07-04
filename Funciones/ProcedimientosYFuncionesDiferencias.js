//PROCEDIMIENTOS Y FUNCIONES: DIFERENCIAS

//PROCEDIMIENTOS: NO REGRESAN NINGUN VALOR
function imprimir (cadena){
    console.log(cadena.toLowerCase());
        }
    
        //LLAMADA AL PROCEDIMIENTO

        imprimir('Hello, WORLD!')

//FUNCIONES: DEVUELVEN VALOR.


function multiplication(number1,number2){
    return number1 * number2;
    }

    let number1=100;
let number2=100;

console.log(multiplication(number1,number2));