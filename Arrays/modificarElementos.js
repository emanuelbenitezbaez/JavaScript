//Métodos para modificar arrays
//splice(índiceInicio, cantidadAEliminar, ...elementosAInsertar): 
//Elimina elementos a partir de un índice y opcionalmente inserta nuevos elementos.
const frutas = ['manzana', 'banana', 'cereza'];
frutas.splice(1, 1, 'pera', 'uva'); // frutas ahora es ['manzana', 'pera', 'uva', 'cereza']

//slice(inicio, fin): Extrae una porción del array y devuelve un nuevo array.

const numeros = [1, 2, 3, 4, 5];
const subArray = numeros.slice(2, 4); // subArray es [3, 4]

//reverse(): Invierte el orden de los elementos del array.

const letras = ['a', 'b', 'c'];
letras.reverse(); // letras ahora es ['c', 'b', 'a']
