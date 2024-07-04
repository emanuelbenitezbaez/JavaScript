//EMPLEADO

class Empleado extends Persona {

    static contadorEmpleados = 0;

    constructor(sueldo) {

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