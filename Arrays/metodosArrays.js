//Métodos para transformar arrays
//map(): Crea un nuevo array aplicando una función a cada elemento del array original.

const numeros = [1, 2, 3];
const numerosDoblados = numeros.map(numero => numero * 2); // numerosDoblados es [2, 4, 6]

//filter(): Crea un nuevo array con todos los elementos que cumplan una condición determinada.
const edades = [25, 18, 32, 16];
const adultos = edades.filter(edad => edad >= 18); // adultos es [25, 32]

//reduce(): Reduce todos los elementos de un array a un único valor.

const numeroses = [1, 2, 3, 4];
const suma = numeroses.reduce((total, numero) => total + numero, 0); // suma es 10
