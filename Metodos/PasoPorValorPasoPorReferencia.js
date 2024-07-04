//PASO POR VALOR
//APLICA CUANDO ESTAMOS PASANDO INFORMACION DE TIPO PRIMITIVO(NUMEROS,STRINGS,BOOLEANOS,NULL, UNDEFINED, SYMBOL,BIGINT).

// Paso por valor (tipo primitivo - número)
function cambiarValorPrimitivo(numero) {
    numero = 100; // Modificamos la copia del número
  }
  
  let numeroOriginal = 50;
  cambiarValorPrimitivo(numeroOriginal);
  console.log(numeroOriginal); // Imprime 50 (el valor original no cambia)
  
  // Paso por referencia (objeto - arreglo)
  function cambiarArreglo(array) {
    array.push(100); // Modificamos el arreglo original
  }
  
  let arregloOriginal = [1, 2, 3];
  cambiarArreglo(arregloOriginal);
  console.log(arregloOriginal); // Imprime [1, 2, 3, 100] (el arreglo original se modifica)