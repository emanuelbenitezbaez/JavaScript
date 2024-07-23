/**
 * WeakMap:

Un WeakMap es similar a un Map, pero con una diferencia crucial: las claves solo pueden ser objetos.
 Además, las claves en un WeakMap son referencias débiles, lo que significa que no impiden que la basura
  del navegador las recolecte. Esto es útil para almacenar datos privados asociados a objetos sin crear 
  ciclos de referencia y evitar fugas de memoria.

Las operaciones en un WeakMap son similares a las de un Map, pero no se puede verificar la existencia 
de una clave con has().
 */
const myWeakMap = new WeakMap();

const obj = {};

myWeakMap.set(obj, 'datos privados');

console.log(myWeakMap.get(obj)); // Imprime: datos privados
