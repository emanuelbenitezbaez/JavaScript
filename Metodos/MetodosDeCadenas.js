//FUNCIONES INCORPORADAS
//OBTENER EL LARGO DE UNA CADENA

let cadena = "Hola, soy una cadena";
console.log(cadena.length);

largo= cadena.length;
console.log(largo);


//NO PODEMOS MODIFICAR UNA CADENA EN JAVASCRIPT
//EL STRING ES UN TIPO DE DATO PRIMITIVO(INMUTABLE)

cadena[0]= `Z`;

console.log(cadena);

//LO QUE SI PODEMOS ES ASIGNAR UNA NUEVA CADENA A LA VARIABLE

cadena = `Hola, soy una cadena nueva`;
console.log(cadena.length);
console.log(cadena);

//RECORRER LA CADENA

for(let i=0; i<cadena.length; i++){
    console.log(`Indice ${i} --> ${cadena[i]}`);

}
//SUBCADENA

let cadenas=`Hola, como estas?`;

console.log(cadenas.substring(0,4));


console.log(cadenas.substring(10,16));