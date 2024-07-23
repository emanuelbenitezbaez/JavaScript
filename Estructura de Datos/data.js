/**
Estructuras de datos en JavaScript: Map, WeakMap, Set, WeakSet y JSON
En JavaScript, las estructuras de datos son elementos esenciales para 
organizar y almacenar información de manera eficiente. A partir de ES6,
 se introdujeron nuevas estructuras de datos que complementan a las tradicionales 
 como arrays y objetos, ofreciendo mayor flexibilidad y rendimiento. 
 Veamos en detalle las características y aplicaciones de cada una: */
 /*
 
Estructuras de datos en JavaScript: Map, WeakMap, Set, WeakSet y JSON
En JavaScript, las estructuras de datos son elementos esenciales para organizar y almacenar información de manera eficiente. A partir de ES6, se introdujeron nuevas estructuras de datos que complementan a las tradicionales como arrays y objetos, ofreciendo mayor flexibilidad y rendimiento. Veamos en detalle las características y aplicaciones de cada una:

1. Map:

Un Map es una colección ordenada de pares clave-valor, donde las claves pueden ser de cualquier tipo de dato (incluidos objetos) y los valores pueden ser cualquier otro tipo de dato. Las principales operaciones en un Map son:

set(key, value): Agrega o actualiza el valor asociado a una clave específica.
get(key): Obtiene el valor asociado a una clave específica.
has(key): Verifica si una clave específica existe en el Map.
delete(key): Elimina la clave y el valor asociados de la estructura.
size: Devuelve la cantidad de pares clave-valor en el Map.
keys(): Devuelve un iterador sobre las claves del Map.
values(): Devuelve un iterador sobre los valores del Map.
entries(): Devuelve un iterador sobre los pares clave-valor del Map.
 */
const myMap = new Map();

myMap.set('nombre', 'Juan');
myMap.set('apellido', 'Pérez');
myMap.set('edad', 30);

console.log(myMap.get('nombre')); // Imprime: Juan
console.log(myMap.has('apellido')); // Imprime: true
console.log(myMap.size); // Imprime: 3
