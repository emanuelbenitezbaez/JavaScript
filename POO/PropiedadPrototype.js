/*
En JavaScript, cada objeto tiene una propiedad especial llamada prototype. Esta propiedad es como un "molde" o "plano" que se utiliza para construir otros objetos. Aquí te dejo los puntos clave:

Objetos y Prototipos:

En JavaScript, todos los objetos tienen una propiedad prototype.
La propiedad prototype de un objeto es donde se definen las propiedades y métodos que los objetos creados a partir de él heredarán.
Funciones Constructoras:

Una forma común de trabajar con prototipos es a través de funciones constructoras. Estas funciones se utilizan para crear objetos con un conjunto predefinido de propiedades y métodos.

Por ejemplo:

*/

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function() {
    console.log('Hola, me llamo ' + this.nombre);
};

var persona1 = new Persona('Juan', 30);
persona1.saludar(); // Imprime: Hola, me llamo Juan

/*
En este ejemplo:

Persona es una función constructora que define propiedades (nombre y edad).
Persona.prototype.saludar es un método que todos los objetos creados con Persona pueden usar.
*/