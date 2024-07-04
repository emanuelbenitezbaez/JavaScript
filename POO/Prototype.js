//AGREGAR NUEVAS PROPIEDADES AL OBJETO

function Persona(name,fullname,age){
this.name = name;
this.fullname = fullname;
this.age = age;
this.displayName = function (){
    return `${this.name} ${this.fullname}`
}

}

let persona1 =new Persona(`Jonh`,`Doe`,20);
console.log(persona1);
console.log(persona1.displayName());

//AGREGAR NUEVA PROPIEDAD AL OBJETO CON LA SENTENCIA PROTOTYPE
Persona.prototype.city = `Buenos Aires`;
Persona.prototype.greet = function () {
    return `Hello I'm ${this.name} `;
}

console.log(persona1);
console.log(persona1.displayName());
console.log(persona1.greet());

//CREAMOS NUEVAS INSTANCIAS DEL OBJETO/CLASE PERSONA.

let persona2 = new Persona(`Ann`,`Hathaway`);
console.log(persona2.greet());

let persona3 = new Persona(`Rik`,`Morty`);
console.log(persona3.greet());