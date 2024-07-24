/**
 * 
 *  WeakSet:

Un WeakSet es similar a un Set, pero con la misma restricción de claves débiles que un WeakMap.
 Los valores en un WeakSet solo pueden ser objetos, y no se puede verificar la existencia de un valor con has().

Las operaciones en un WeakSet son similares a las de un Set.

Ejemplo:
*/
const myWeakSet = new WeakSet();

const obj1 = {};
const obj2 = {};

myWeakSet.add(obj1);
myWeakSet.add(obj2);
myWeakSet.add(obj1); // Se ignora porque ya existe

console.log(myWeakSet.size); // Imprime: 2
