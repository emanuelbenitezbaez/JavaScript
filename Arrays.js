//ARRAYS
// UN ARRAY PERMITE ALMACENAR MULTIPLES VALORES EN UNA SOLA VARIABLE.

//SINTAXIS SIMPLIFICADA DE ARREGLOS EN JAVASCRIPT
let arrayOfNumbers=[1,2,3,'four',5,6,'seven',true];

console.log(arrayOfNumbers);

  console.log(arrayOfNumbers[7]);

  //ITERAR ARRAYS

  let arrays = [231100,1112,11114,1515,1856,1444,54654]; //

  for(let i= 0;i< arrays.length;i++){

    console.log(arrays[i]);

    //ORDENAR ARRAY CON SORT
let ordenadoMayorMenor = arrays.sort((a,b) => b-a);
console.log(ordenadoMayorMenor);
let ordenadoMenorMayor = arrays.sort((a,b) => a-b);
console.log(ordenadoMenorMayor);
  }


  