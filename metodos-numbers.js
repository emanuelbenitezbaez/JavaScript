// METODOS AVANZADOS NUMBER: toString()
//Convierte un número en una cadena de texto.
let number1 = 123;
let string1 = number1.toString();
console.log(string1);        // Output: "123"
console.log(typeof string1); // Output: "string"

//toFixed()
//Formatea un número utilizando notación de punto fijo.
let number2 = 123.456;
let fixedNumber2 = number2.toFixed(2);
console.log(fixedNumber2);        // Output: "123.46"
console.log(typeof fixedNumber2); // Output: "string"



//toExponential()
//Convierte un número en notación exponencial.
let number3 = 123456;
let exponential3 = number3.toExponential(2);
console.log(exponential3);        // Output: "1.23e+5"
console.log(typeof exponential3); // Output: "string"

//toPrecision()
//Formatea un número a una longitud específica
let number4 = 123.456;
let precision4 = number4.toPrecision(4);
console.log(precision4);        // Output: "123.5"
console.log(typeof precision4); // Output: "string"

//parseInt()
//Convierte una cadena en un número entero.

let string5 = "123.456";
let integer5 = parseInt(string5);
console.log(integer5);        // Output: 123
console.log(typeof integer5); // Output: "number"

//parseFloat()
//Convierte una cadena en un número de punto flotante.

let string6 = "123.456";
let float6 = parseFloat(string6);
console.log(float6);        // Output: 123.456
console.log(typeof float6); // Output: "number"

//Number.isInteger()
//Determina si el valor es un número entero.
let number7a = 123;
let number7b = 123.456;
console.log(Number.isInteger(number7a)); // Output: true
console.log(Number.isInteger(number7b)); // Output: false

//Number.isNaN()
//Determina si el valor es NaN (Not-a-Number).
let number8a = NaN;
let number8b = 123;
console.log(Number.isNaN(number8a)); // Output: true
console.log(Number.isNaN(number8b)); // Output: false

// Number.isFinite()
//Determina si el valor es un número finito.
let number9a = Infinity;
let number9b = 123;
console.log(Number.isFinite(number9a)); // Output: false
console.log(Number.isFinite(number9b)); // Output: true

//Number.MAX_VALUE y Number.MIN_VALUE
//Propiedades estáticas que representan el mayor y menor valor numérico posible en JavaScript.
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // Output: 5e-324

//Ejemplos Combinados

let number10 = 123.456;
let stringNumber10 = number10.toString();
console.log(stringNumber10); // Output: "123.456"

let number11 = 987.654;
let fixedNumber11 = number11.toFixed(2);
console.log(fixedNumber11); // Output: "987.65"

let number12 = 1234567;
let exponential12 = number12.toExponential(3);
console.log(exponential12); // Output: "1.235e+6"

let number13 = 123.456;
let precision13 = number13.toPrecision(5);
console.log(precision13); // Output: "123.46"

let string14 = "789.012";
let integer14 = parseInt(string14);
console.log(integer14); // Output: 789

let string15 = "789.012";
let float15 = parseFloat(string15);
console.log(float15); // Output: 789.012

let number16a = 456;
let number16b = 456.789;
console.log(Number.isInteger(number16a)); // Output: true
console.log(Number.isInteger(number16b)); // Output: false

let number17a = NaN;
let number17b = 456;
console.log(Number.isNaN(number17a)); // Output: true
console.log(Number.isNaN(number17b)); // Output: false

let number18a = Infinity;
let number18b = 456;
console.log(Number.isFinite(number18a)); // Output: false
console.log(Number.isFinite(number18b)); // Output: true
