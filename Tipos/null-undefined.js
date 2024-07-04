//undefined
//El valor undefined se utiliza para indicar que una variable ha sido declarada pero aún no se le ha asignado un valor.
let var1;
console.log(var1); // Output: undefined

let var2 = undefined;
console.log(var2); // Output: undefined
console.log( typeof var2);
//null
//El valor null se utiliza para representar la ausencia intencional de cualquier valor de objeto. 
//Es un valor que puedes asignar a una variable para indicar que no tiene ningún valor.
let var3 = null;
console.log(var3);
console.log(typeof var3); // Output: null

//Comparación entre null y undefined
//Aunque null y undefined son distintos tipos de datos, se consideran iguales en una comparación débil (==), 
//pero no en una comparación estricta (===).

console.log(null == undefined);  // Output: true
console.log(null === undefined); // Output: false

//Symbol: Declarar una variable unica que nunca cambia.

const uniqueID = Symbol('ID');

console.log(uniqueID);

//Creación de BigInt
//Puedes crear un BigInt añadiendo n al final de un número entero o utilizando el constructor BigInt().

let bigInt1 = 1234567890123456789012345678901234567890n;
console.log(bigInt1); // Output: 1234567890123456789012345678901234567890n

let bigInt2 = BigInt("1234567890123456789012345678901234567890");
console.log(bigInt2); // Output: 1234567890123456789012345678901234567890n
