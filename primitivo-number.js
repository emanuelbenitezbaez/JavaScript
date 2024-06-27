// En js existen 3 tipos de numbers.
//Tipo entero y decimal.(se escriben diferente pero siguien siendo iguales pra js)

const entero = 100;
const decimal = 3.14;
console.log(typeof entero);
console.log(typeof decimal);

//Notación cientifica

const notacionCientifica = 5e3;

// Infinitos y NaN

const infinitos = Infinity;
const noSoyUnNumero = NaN;

console.log(typeof infinitos);
console.log(typeof noSoyUnNumero);

//OPERACIONES ARITMETICAS
//SUMA
let a = 5;
let b = 3;
let result = a + b;
console.log(result); // Output: 8

//RESTA
let c = 5;
let d = 3;
let result1 = c - d;
console.log(result1); // Output: 2

//MULTIPLICACION

let e = 5;
let f = 3;
let result2 = e * f;
console.log(result2); // Output: 15

// DIVISION
let g = 6;
let h = 3;
let result3 = g / h;
console.log(result); // Output: 2

// MODULO

let X = 7;
let Z = 3;
let result4 = X % Z;
console.log(result4); // Output: 1


//INCREMENTO
let incremento = 5;
incremento++;
console.log(incremento); // Output: 6

//DECREMENTO

let decremento = 5;
decremento--;
console.log(decremento); // Output: 4

//EXPONENCIACION
//El operador de exponenciación se utiliza para elevar un número a la potencia de otro número.

let l = 2;
let p = 3;
let resultExpo = l ** p;
console.log(resultExpo); // Output: 8

//A TENER EN CUENTA: Precision, js no es muy preciso. Por esto hay que fixearlo.

const n1 = 0.1;
const n2 = 0.2;
const rn3 = n1 + n2;
console.log(rn3); // Output:0.30000000000000004

console.log(rn3.toFixed(1)); // Output:0.3



