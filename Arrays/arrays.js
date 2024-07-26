
//Literal de array:
const miArray = ['manzana', 'banana', 'cereza'];

//Constructor de Array:
const otroArray = new Array(5); // Crea un array con 5 elementos vacíos

/*

Métodos de Arrays
Los arrays en JavaScript vienen con una gran variedad de métodos que te permiten manipular y trabajar con sus elementos.
 A continuación, te explicaré algunos de los más comunes:*/

 //Métodos para agregar y eliminar elementos
//push(): Agrega uno o más elementos al final del array.
 
miArray.push('uva'); // miArray ahora es ['manzana', 'banana', 'cereza', 'uva']

//pop(): Elimina el último elemento del array y lo devuelve.

const ultimoElemento = miArray.pop(); // ultimoElemento es 'uva'

//shift(): Elimina el primer elemento del array y lo devuelve.

const primerElemento = miArray.shift(); // primerElemento es 'manzana'

//unshift(): Agrega uno o más elementos al principio del array.

miArray.unshift('pera'); // miArray ahora es ['pera', 'banana', 'cereza']
