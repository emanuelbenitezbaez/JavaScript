/*Hoisting con Clases en JavaScript

Declaración de Clase no se Eleva: A diferencia de las funciones y variables que pueden ser declaradas después
 de su uso y aún así ser accedidas antes de su declaración (debido al hoisting), las clases en JavaScript no
  se elevan de la misma manera. */

  //Por ejemplo, considera este código:


  let p = new Person();
class Person {
    constructor(name) {
        this.name = name;
    }
}


/*
Aquí, intentamos crear una instancia de Person antes de que la clase sea declarada. 
Sin embargo, esto resultará en un error ReferenceError porque la declaración de la 
clase Person no se eleva (hoist):


Esto es porque, a diferencia de las funciones, donde la declaración completa de la función se eleva
 (incluso si es una función anónima o asignada a una variable), la clase no se "eleva" al principio.
  En lugar de eso, sigue las reglas normales de secuencia de ejecución.
*/


/*
Declaraciones de Métodos Sí se Elevan: Aunque la clase en sí misma no se eleva, los métodos dentro 
de la clase sí lo hacen. Por lo tanto, puedes definir métodos de clase antes o después de la definición
 del constructor, y seguirán siendo accesibles. Sin embargo, no podrás crear instancias de la clase antes 
 de su declaración.
*/

let per = new Persons('Alice');
class Persons {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}

console.log(per.greet()); // Funcionará correctamente
