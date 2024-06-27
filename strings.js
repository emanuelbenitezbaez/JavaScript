//Strings
//Crecion de strings : Existen 3 formas

const cadena = 'Comillas simples';
console.log(cadena);

const cadena1 = "Comillas dobles";
console.log(cadena1);

const cadena2 = `Comillas backticks`;
console.log(cadena2);

//CONCATENAR STRINGS : Existen 4 formas


const string1 ="Hola";
const string2 ="como";
const string3 ="estas?";

// 1 - CONCATENACION OPCION +

const direccion= "Chimondegui 1024";
const ciudad = "Monte Grande.";
const direccionCompleta = "Mi direccion completa es:"+""+direccion+" "+ciudad;
console.log(direccionCompleta);


// 2 - CONCATENACION CON TEMPLATE LITERALS(se usan los backticks)

const nombre = "Emanuel";
const pais = "🇦🇷";
const presentacion = `Hola, soy ${nombre} de ${pais}`;
console.log(presentacion);

//3 - Concatenación con Join('aca va - espacio o lo que quieras meter') - Metodo de strings.

const primeraParte = 'Me';
const segundaParte = 'gusta';
const terceraParte = 'ver';
const cuartaParte = 'series';
const pensamiento = [ primeraParte,segundaParte,terceraParte,cuartaParte ];


console.log(pensamiento.join(' '));

//4 - Concatenación con metodo concat(nombre, segundaParte, terceraParte)
// se utiliza para unir dos o más arrays, devolviendo un nuevo array

const estado = 'Tengo';
const actual = 'Hambre';
const estadoActual = 'Mi estado es : '.concat(estado, ' ', actual);
console.log(estadoActual);

