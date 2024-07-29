//Otros métodos útiles
//sort(): Ordena los elementos de un array. Por defecto ordena alfabéticamente o numéricamente de menor a mayor, 
//pero se puede personalizar con una función de comparación.
const numeros = [3, 1, 4, 1, 5, 9];
numeros.sort((a, b) => a - b); // Ordena de menor a mayor

//join(separador): Convierte todos los elementos del array en una cadena, separándolos con el valor especificado.
const colores = ['rojo', 'verde', 'azul'];
const cadenaDeColores = colores.join(', '); // cadenaDeColores es 'rojo, verde, azul'

//concat(...arrays): Combina dos o más arrays y devuelve un nuevo array.
const array1 = [1, 2];
const array2 = [3, 4];
const arrayCombinado = array1.concat(array2); // arrayCombinado es [1, 2, 3, 4]

