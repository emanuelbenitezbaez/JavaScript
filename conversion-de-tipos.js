//. Conversión de Tipos Explícita
//La conversión explícita de tipos ocurre cuando se utilizan funciones o métodos específicos para convertir un tipo de dato a otro. 
//Es decir, el desarrollador tiene un control directo sobre cuándo y cómo ocurre la conversión.

//Conversión a String

let number1 = 123;
let string1 = String(number1); // Utilizando el constructor String
console.log(string1);        // Output: "123"
console.log(typeof string1); // Output: "string"

let boolean1 = true;
let string2 = boolean1.toString(); // Utilizando el método toString()
console.log(string2);        // Output: "true"
console.log(typeof string2); // Output: "string"


//Conversión a Number
let string3 = "456";
let number2 = Number(string3); // Utilizando el constructor Number
console.log(number2);        // Output: 456
console.log(typeof number2); // Output: "number"

let string4 = "123.45";
let number3 = parseFloat(string4); // Utilizando parseFloat
console.log(number3);        // Output: 123.45
console.log(typeof number3); // Output: "number"

let string5 = "123";
let number4 = parseInt(string5); // Utilizando parseInt
console.log(number4);        // Output: 123
console.log(typeof number4); // Output: "number"

//Conversión a Boolean
let string6 = "true";
let boolean2 = Boolean(string6); // Utilizando el constructor Boolean
console.log(boolean2);        // Output: true
console.log(typeof boolean2); // Output: "boolean"

let number5 = 0;
let boolean3 = Boolean(number5); // Utilizando el constructor Boolean
console.log(boolean3);        // Output: false
console.log(typeof boolean3); // Output: "boolean"


// Conversión de Tipos Implícita
/*
La conversión implícita de tipos ocurre cuando JavaScript convierte automáticamente 
un tipo de dato a otro sin intervención explícita del desarrollador. 
Esto suele ocurrir en operaciones y expresiones donde se espera un tipo específico de dato.
*/
//Operadores Aritméticos

let result1 = "5" - 3; // "5" se convierte implícitamente a número
console.log(result1); // Output: 2

let result2 = "5" + 3; // 3 se convierte implícitamente a cadena
console.log(result2); // Output: "53"

let result3 = "5" * 2; // "5" se convierte implícitamente a número
console.log(result3); // Output: 10

let result4 = "5" / 2; // "5" se convierte implícitamente a número
console.log(result4); // Output: 2.5

//Comparaciones
let comparison1 = "5" == 5; // "5" se convierte implícitamente a número
console.log(comparison1); // Output: true

let comparison2 = "5" === 5; // No hay conversión implícita, tipos diferentes
console.log(comparison2); // Output: false

let comparison3 = null == undefined; // null y undefined son iguales en comparación no estricta
console.log(comparison3); // Output: true

let comparison4 = null === undefined; // null y undefined son diferentes en comparación estricta
console.log(comparison4); // Output: false


const multi = "5"
const prueba = 1
const multiPrueba = multi * prueba
console.log(typeof multiPrueba); //aver que pasa.