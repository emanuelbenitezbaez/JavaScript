/**
 * Set:

Un Set es una colección no ordenada de valores únicos. Esto significa que solo se puede almacenar un valor una vez, y si se agrega un valor duplicado, se ignora. Las principales operaciones en un Set son:

add(value): Agrega un valor al Set. Si el valor ya existe, se ignora.
delete(value): Elimina un valor del Set.
has(value): Verifica si un valor específico existe en el Set.
size: Devuelve la cantidad de valores en el Set.
values(): Devuelve un iterador sobre los valores del Set.
forEach(callback): Ejecuta una función de devolución de llamada para cada valor del Set.
 * 
 */
const mySet = new Set();

mySet.add('uno');
mySet.add('dos');
mySet.add('tres');
mySet.add('uno'); // Se ignora porque ya existe

console.log(mySet.size); // Imprime: 3
console.log(mySet.has('dos')); // Imprime: true
