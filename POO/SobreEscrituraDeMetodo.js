//SOBRE ESCRITURA DE METODO

class Empleado {

    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    obtenerDetalle() {
        return `Empleado: ${this._nombre}, Sueldo: ${this._sueldo} `
    }
   

}

class Gerente extends Empleado {

    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this._departamento = departamento;

    }
    get departamento() { return this._departamento; }
    set departamento(departamento){this._departamento = departamento;}
    obtenerDetalle() {
        return `Gerente:${super.obtenerDetalle()}, Departamento: ${this._departamento} `;
    }
}

let gerente1 = new Gerente(`Carlos`,800,`Finanzas`);
console.log(gerente1.obtenerDetalle());

let gerente2 = new Gerente(`Carla`,800,`Sistemas`);
console.log(gerente2.obtenerDetalle());