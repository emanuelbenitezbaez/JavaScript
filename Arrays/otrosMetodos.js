//Otros métodos útiles
//Los arrays tienen muchos otros métodos como forEach, indexOf, slice, splice, concat, join, etc., 
//cada uno con una función específica.
const frutas = ['manzana', 'banana', 'cereza'];

// Agregar un elemento al final
frutas.push('uva');

// Eliminar el primer elemento
const primeraFruta = frutas.shift();

// Crear un nuevo array con las frutas en mayúsculas
const frutasMayusculas = frutas.map(fruta => fruta.toUpperCase());

// Filtrar las frutas que empiezan con 'b'
const frutasConB = frutas.filter(fruta => fruta.startsWith('b'));

// Sumar la longitud de todas las frutas
const longitudTotal = frutas.reduce((total, fruta) => total + fruta.length, 0);

console.log(frutas); // ['banana', 'cereza', 'uva']
console.log(primeraFruta); // 'manzana'
console.log(frutasMayusculas); // ['BANANA', 'CEREZA', 'UVA']
console.log(frutasConB); // ['banana']
console.log(longitudTotal); // 14
