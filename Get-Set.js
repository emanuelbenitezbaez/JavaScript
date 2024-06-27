/*
1. Personalizar la lectura de propiedades (método get)

Con el método get, puedes agregar lógica adicional al momento de leer una propiedad.

Por ejemplo, imagina que deseas que la propiedad edad siempre se muestre formateada como un rango de edad.
*/
const usuario = {
    nombre: "Juan",
    _edad: 30, // La propiedad se guarda con un nombre diferente
    get edad() {
      if (this._edad < 18) {
        return "Menor de edad";
      } else if (this._edad < 65) {
        return `Adulto entre ${this._edad - 18} y ${this._edad - 18 + 5}`;
      } else {
        return "Jubilado";
      }
    },
    set edad(nuevaEdad) {
      this._edad = nuevaEdad;
    },
    email: "juan@ejemplo.com"
  };
  
  console.log(usuario.edad); // Imprime "Adulto entre 12 y 17"
  usuario.edad = 25;
  console.log(usuario.edad); // Imprime "Adulto entre 7 y 12"

  /*
  En este caso:

La propiedad _edad se guarda con un nombre diferente (_edad) para evitar conflictos con el método get.
El método get evalúa la edad y devuelve un mensaje personalizado.
El método set actualiza la propiedad _edad internamente.
  */

/*
2. Validar y controlar la escritura de propiedades (método set)

El método set te permite validar y controlar los valores que se asignan a una propiedad.

Imagina que deseas asegurarte de que la propiedad email siempre tenga un formato válido.

*/

const usuarios = {
    nombre: "Juan",
    edad: 30,
    email: "juan@ejemplo.com",
    set email(nuevoEmail) {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nuevoEmail)) {
        this._email = nuevoEmail;
      } else {
        console.error("Correo electrónico no válido");
      }
    }
  };
  
  usuarios.email = "nuevo@valido.com"; // Funciona correctamente
  usuarios.email = "emailinvalido"; // Muestra un error en la consola
  