//TIPO DE DATOS BOOLEANOS
let bool1 = true;
let bool2 = false;

let bool3 = Boolean(1);    // true, porque 1 es un valor verdadero
let bool4 = Boolean(0);    // false, porque 0 es un valor falso
let bool5 = Boolean("");   // false, porque una cadena vacía es un valor falso
let bool6 = Boolean("Hi"); // true, porque una cadena no vacía es un valor verdadero

console.log(bool1); // Output: true
console.log(bool2); // Output: false
console.log(bool3); // Output: true
console.log(bool4); // Output: false
console.log(bool5); // Output: false
console.log(bool6); // Output: true

//Operadores Lógicos

//Los operadores lógicos en JavaScript se usan para realizar operaciones booleanas.
//AND (&&)
//Retorna true si ambos operandos son verdaderos.

let bool7 = true && true;   // true
let bool8 = true && false;  // false
let bool9 = false && false; // false

console.log(bool7); // Output: true
console.log(bool8); // Output: false
console.log(bool9); // Output: false


//OR (||)
//Retorna true si al menos uno de los operandos es verdadero.

let bool10 = true || false;  // true
let bool11 = false || false; // false
let bool12 = true || true;   // true

console.log(bool10); // Output: true
console.log(bool11); // Output: false
console.log(bool12); // Output: true


//NOT (!)
//Invierte el valor de un booleano.

let bool13 = !true;  // false
let bool14 = !false; // true

console.log(bool13); // Output: false
console.log(bool14); // Output: true


//Comparaciones
//Las comparaciones en JavaScript retornan un booleano.

//Igualdad (== y ===)
//== compara valores sin considerar el tipo, mientras que === compara tanto valores como tipos.

let bool15 = (5 == "5");   // true, porque 5 es igual a "5" en valor
let bool16 = (5 === "5");  // false, porque 5 no es igual a "5" en tipo
let bool17 = (5 === 5);    // true, porque ambos son 5 y del mismo tipo

console.log(bool15); // Output: true
console.log(bool16); // Output: false
console.log(bool17); // Output: true

//Desigualdad (!= y !==)
//!= compara valores sin considerar el tipo, mientras que !== compara tanto valores como tipos.

let bool18 = (5 != "5");   // false, porque 5 es igual a "5" en valor
let bool19 = (5 !== "5");  // true, porque 5 no es igual a "5" en tipo
let bool20 = (5 !== 5);    // false, porque ambos son 5 y del mismo tipo

console.log(bool18); // Output: false
console.log(bool19); // Output: true
console.log(bool20); // Output: false

//Mayor que y Menor que (>, <, >=, <=)
//Compara valores numéricos.

let bool21 = (10 > 5);    // true
let bool22 = (10 < 5);    // false
let bool23 = (10 >= 10);  // true
let bool24 = (10 <= 5);   // false

console.log(bool21); // Output: true
console.log(bool22); // Output: false
console.log(bool23); // Output: true
console.log(bool24); // Output: false
