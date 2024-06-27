//Paso por valor(modificar el dato por valor, hace una copia)

let x = 1;
let y = "Hola";
let z = null;

let a = x;
let b = y;
let c = z;

console.log(x, y, z,a,b,c);

// Paso por valor
let numero = 10;
function cambiarNumero(n) {
  n = 20;
}
cambiarNumero(numero);
console.log(numero); // Imprime 10

//Paso por referencia(modifica el dato por referencia, no copia, apunta a la referencia)

let frutas= ['a', 'b','c'];
frutas[1]='abc';
console.log(frutas);



// Paso por referencia
let persona = { nombre: "Juan" };
function cambiarNombre(p) {
  p.nombre = "Ana";
}
cambiarNombre(persona);
console.log(persona.nombre); // Imprime "Ana"
