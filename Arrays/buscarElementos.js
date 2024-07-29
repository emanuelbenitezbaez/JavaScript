//Métodos para buscar elementos
//indexOf(elemento): Devuelve el índice de la primera aparición de un elemento en el array, o -1 si no se encuentra.
const frutas = ['manzana', 'banana', 'cereza'];
const indiceDeBanana = frutas.indexOf('banana'); // indiceDeBanana es 1

//lastIndexOf(elemento): Devuelve el índice de la última aparición de un elemento en el array.
const numeros = [1, 2, 3, 2, 1];
const ultimoIndiceDe2 = numeros.lastIndexOf(2); // ultimoIndiceDe2 es 3

//includes(elemento): Devuelve true si el elemento existe en el array, false en caso contrario.
const colores = ['rojo', 'verde', 'azul'];
const contieneAmarillo = colores.includes('amarillo'); // contieneAmarillo es false

//find(funciónDePrueba): Devuelve el primer elemento que cumple la condición especificada por la función de prueba.

const personas = [
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Juan', edad: 25 }
];
const personaMayorDe28 = personas.find(persona => persona.edad > 28);

//findIndex(funciónDePrueba): Devuelve el índice del primer elemento que cumple la condición especificada por la función de prueba.
const numeros2 = [1, 2, 3, 4, 5];
const indiceDelPrimerNumeroPar = numeros2.findIndex(numero => numero % 2 === 0);

