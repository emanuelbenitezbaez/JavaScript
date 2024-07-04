// Strings primitivos

const stringPrimitivo = 'Soy un string primitivo';

console.log(typeof stringPrimitivo);

const stringPrimitivoTambien = String('Soy un string primitivo');

console.log(typeof stringPrimitivoTambien);

// Strings de tipo objetos: Tipo objeto para poder manipularlo.

const stringTipoObjeto = new String('Soy un string tipo objeto');

console.log(typeof stringTipoObjeto);

//Acceder a caracteres:

const saludo = 'Hola como estas?';

console.log(saludo[3]);
console.log(saludo.charAt(15));
console.log(saludo.indexOf('?'));
console.log(saludo.indexOf('estas?'));// devuelve la posicion desde donde empieza.
console.log(saludo.indexOf('x'));// devuelve -1 si no esta.
console.log(saludo.lastIndexOf('o'));// devuelve el ultimo indice de lo que buscas.
console.log(saludo.slice(3,11));//Devuelve lo que encuentra entre las posiciones que le pasamos. Empieza en donde queremos y termina en el que queremos +1.
console.log(saludo.length);// Devuelve la longitud del string.
console.log(saludo.toLowerCase());// Devuelve el string en minusculas.
console.log(saludo.toUpperCase());//Devuelve el string en mayusculas.


const saludoDividido = saludo.split(' ');
console.log(saludoDividido);// Devuelve el string separados  en un array de strings y se puede acceder a estos.

console.log(saludoDividido[2]);// Se puede acceder al string que devolvio el split como una array.

const saludoConEspacio =' Hola como estas? ';

const saludoSinEspacio = saludoConEspacio.trim();//Este metodo trim() quita los espacios al principio y final del string.
console.log(saludoSinEspacio);

const saludoOriginal = 'Hola Mundo!';

const nuevoSaludo = saludoOriginal.replace('Mundo','World');// Este metodo reemplaza un contenido por otro.
console.log(nuevoSaludo);