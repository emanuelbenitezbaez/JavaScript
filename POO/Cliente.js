//CLIENTE
class Client extends Persona {

    static contadorClientes = 0;//variable estatica para contavilizar los clientes.

    constructor(fechaRegistro) {
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