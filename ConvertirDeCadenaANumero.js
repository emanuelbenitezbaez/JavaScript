//CONVERTIR DE CADENA A NUMERO

let a= `10`; b = `30`;

//SI SON CADENAS SE CONCATENAN

console.log(a + b);

// If you only need the integer part of the strings:
let suma = parseInt(a) + parseInt(b);
console.log(suma); // Output: 40

// If you want to handle potential decimal values:
let sum = Number(a) + Number(b);
console.log(sum); // Output: 40 (assuming both strings represent integers)
