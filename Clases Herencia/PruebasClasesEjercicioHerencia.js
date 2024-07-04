//PRUEBA PERSONAS:

//PERSONA

class Persona {
    // Atributo estatico
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {//propiedades de instancia, no esta asociadas con los objetos de la clase.

        this._idPersona = ++Persona.contadorPersonas;//inicializamos idPerson dentro del constructor 
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;

    }
    //GETTERS Y SETTERS
    get idPersona() {
        return contadorPersonas++;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get edad() {
        return this._edad
    }
    set edad(edad) {
        this._edad = edad;
    }
    get idPersona() {
        return this._idPersona;
    }
    //METODO toString() DE LA CLASE PERSONA.
    toString() {
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}

//EMPLEADO

class Empleado extends Persona {

    static contadorEmpleados = 0;

    constructor(nombre,apellido,edad,sueldo) {
        super(nombre,apellido,edad);//LLAMDA AL CONSTRUCTOR DE LA CLASE PADRE Persona.
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;

    }
    get IdEmpleado() {
        return this._idEmpleado;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    //METODO toString() DE LA CLASE PERSONA.
    toString() {
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;//ESTE METODO YA TIENE GUARDADO LOS ATRIBUTOS DE PERSONA.
    }

}
//CLIENTE
class Client extends Persona {

    static contadorClientes = 0;//variable estatica para contavilizar los clientes.

    constructor(nombre,apellido,edad,fechaRegistro) {
        super(nombre,apellido,edad);
        this._idClientes = ++Client.contadorClientes;
        this._fechaRegistro = fechaRegistro;

    }
    get idCliente() {
        return this._idClientes;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }
    //METODO toString() DE LA CLASE PERSONA.
    toString() {
        return `${super.toString()} ${this._idClientes} ${this._fechaRegistro}`;//ESTE METODO YA TIENE GUARDADO LOS ATRIBUTOS DE PERSONA y EMPLEADO.
    }
}
//CLASE PERSONA:

let persona1 = new Persona(`Emanuel`,`Benitez Baez`,`35`);
console.log(persona1.toString());


let persona2 = new Persona(`Paula`,`Federico`,`34`);
console.log(persona2.toString());

//CLASE EMPLEADO

let empleado1 = new Empleado(`Carlos`,`John`,28,1000);
console.log(empleado1.toString());


let empleado2 = new Empleado(`Laura`,`Doe`,28,2000);
console.log(empleado2.toString());

//CLASE CLIENTE

let cliente1 = new Client(`Leo`,`Primera`,40,new Date());
console.log(cliente1.toString());

let cliente2 = new Client(`Mariela`,`Corino`, 45,new Date());
console.log(cliente2.toString());