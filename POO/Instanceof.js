//INSTANCEOF
//NOS PERMITE DETERMINAR LOS TIPOS.

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
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
    obtenerDetalle() {
        return `Gerente:${super.obtenerDetalle()}, Departamento: ${this._departamento} `;
    }

}
//FUNCION INDEPENDIENTE FUERA DE LAS CLASES.
//RECIBE UNA VARIABLE TIPO Y  CON ESA VARIABLE ACCEDEMOS AL METODO OBTENER DETALLE.
//LE PASAMOS DIFERENTES TIPOS Y DEPENDIENDO DEL TIPO , VA A SER EL METODO QUE SE VA A LLAMAR.
function imprimirTipo(tipo) {//PODEMOS PASARLE UN TIPO DE LA CLASE PADRE O HIJA Y DEPENDIENDO DE ESO, SE LLAMA EL METODO DE ESA CLASE.
   console.log(tipo.obtenerDetalle());
   if(tipo instanceof Gerente){
    console.log(`Es un objeto de tipo Gerente`);
   }

   if(tipo instanceof Empleado){
    console.log(`Es un objeto de tipo Empleado`);
   }

}



let gerente1 = new Gerente(`Carlos`, 800, `Finanzas`);

let gerente2 = new Gerente(`Carla`, 800, `Sistemas`);

let empleado1 = new Empleado(`Austin`, 1200);

let empleado2 = new Empleado(`Alejandro`, 1000);


//LLAMAMOS AL METODO IMPRIMIR.

//LE PASAMOS DIFERENTES TIPOS(OBJETOS), UNO DE LA CLASE PADRE Y OTRO DE LA CLASE HIJA.
imprimirTipo(gerente1);


imprimirTipo(empleado1);