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
        return this._idPersona;
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
  
    //METODO toString() DE LA CLASE PERSONA.
    toString() {
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}
