//MATRICES
//UNA MATRIZ ES UN ARREGLO DE 2 DIMENSIONES 

//TENER EN CUENTA COLUMNAS Y FILAS
//[0]:FILA 0  /  [0]:COLUMNA 0

let matriz = [[], []];

matriz[0][0] = 100;
matriz[0][1] = 200;
matriz[0][2] = 300;
matriz[0][3] = 400;

matriz[1][0] = 1000;
matriz[1][1] = 2000;
matriz[1][2] = 3000;
matriz[1][3] = 4000;


//FILA 0 Y COLUMNAS 0-1-2-3
console.log(`Fila [0]- Columna [0]: ${matriz[0][0]}`)
console.log(`Fila [0]- Columna [1]: ${matriz[0][1]}`)
console.log(`Fila [0]- Columna [2]: ${matriz[0][2]}`)
console.log(`Fila [0]- Columna [3]: ${matriz[0][3]}`)

//FILA 1 Y COLUMNAS 0-1-2-3
console.log(`Fila [1]- Columna [0]: ${matriz[1][0]}`)
console.log(`Fila [1]- Columna [1]: ${matriz[1][1]}`)
console.log(`Fila [1]- Columna [2]: ${matriz[1][2]}`)
console.log(`Fila [1]- Columna [3]: ${matriz[1][3]}`)

console.log(matriz);

//FORMA SIMPLIFICADA DE DEFINIR MATRICES

let matrizSimplificada = [['a', 'b', 'c', 'y'], ['d', 'e', 'f', 'z']];

console.log(`Fila [0]- Columna [0]: ${matrizSimplificada[0][0]}`)
console.log(`Fila [0]- Columna [1]: ${matrizSimplificada[0][1]}`)
console.log(`Fila [0]- Columna [2]: ${matrizSimplificada[0][2]}`)
console.log(`Fila [0]- Columna [3]: ${matrizSimplificada[0][3]}`)

console.log(`Fila [1]- Columna [0]: ${matrizSimplificada[1][0]}`)
console.log(`Fila [1]- Columna [1]: ${matrizSimplificada[1][1]}`)
console.log(`Fila [1]- Columna [2]: ${matrizSimplificada[1][2]}`)
console.log(`Fila [1]- Columna [3]: ${matrizSimplificada[1][3]}`)

console.log(matrizSimplificada);



//ITERAR UNA MATRIZ

let matrizSimplify = [['a', 'b', 'c', 'y'], ['d', 'e', 'f', 'z']];

//PARA SABER CUANTAS FILAS TIENE NUESTRA MATRIZ
console.log(matrizSimplify.length);

//PARA SABER CUANTAS COLUMNAS TIENE NUESTRA MATRIZ
console.log(matrizSimplify[0].length);

for (let filas = 0; filas < matrizSimplify.length; filas++) {

    for (let columnas = 0; columnas < matrizSimplify[filas].length; columnas++) {
        console.log(`Elementos:[${filas}][${columnas}] ${matrizSimplify[filas][columnas]}`);
    }
}