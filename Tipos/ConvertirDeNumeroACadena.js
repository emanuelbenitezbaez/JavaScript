//CONVERTIR DE NUMERO A CADENA

let numberOne= 10;
let numberTwo= 20;
//VERIFICAMOS EL TIPO DE DATO Y SU VALOR
console.log( `Tipo: ${typeof numberOne} - Valor: ${numberOne}`);
console.log( `Tipo: ${typeof numberTwo} - Valor: ${numberTwo}`);

//CONVERTIMOS A STRING CON EL METODO toString()
let numberConvertedOne= numberOne.toString();
let numberConvertedTwo= numberTwo.toString();
console.log(`Tipo: ${typeof numberConvertedOne} - Valor: ${numberConvertedOne}`);
console.log( `Tipo: ${typeof numberConvertedTwo} - Valor: ${numberConvertedTwo}`);
let resultConverted= numberConvertedOne + numberConvertedTwo;
console.log(`Tipo: ${typeof resultConverted} - Valor: ${resultConverted}`);

