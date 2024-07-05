//CLASS DISPOSITIVO ENTRADA

class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
}

let dispositivo1 = new DispositivoEntrada(`USB`, `Kingston`);

console.log(dispositivo1);


//CLASS RATON
class Raton extends DispositivoEntrada {

    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;

    }
    get idRaton() {
        return this._idRaton;
    }
    toString() {
        return `Raton: [Id Raton:${this._idRaton} Tipo entrada: ${this._tipoEntrada} Marca: ${this._marca}]`
    }

}
let raton1 = new Raton(`USB`, `Logitech`);
console.log(raton1.toString());


let raton2= new Raton(`USB`, `Genius`);
console.log(raton2.toString());

//CLASE TECLADO
class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado() {
        return this._idTeclado;
    }
    toString() {
        return `Teclado: [Id teclado:${this._idTeclado}, Tipo entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`
    }

}
let teclado1 = new Teclado(`USB`, `Noga`);
console.log(teclado1.toString());

let teclado2 = new Teclado(`USB`, `Genius`);
console.log(teclado2.toString());



//CLASS MONITOR
class Monitor {
    static contadorMonitores = 0;
    constructor(marca, tamanio) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;

    }
    get idMonitor() {
        return this._idMonitor;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get tamanio() {
        return this._tamanio;
    }
    set tamanio(tamanio) {
        this._tamanio = tamanio;
    }
    toString() {
        return  `Monitor: [Id Monitor:${this._idMonitor}, Marca:${this._marca}, Tamaño: ${this._tamanio}]`
    }

}
let monitor1 = new Monitor(`Samsung`, 27);
console.log(monitor1.toString());

let monitor2 = new Monitor(`LG`, 27);
console.log(monitor2.toString());

//CLASE COMPUTADORA:
class Computadora {
    static contadorComputadoras = 0;
    constructor(nombre,monitor,raton,teclado) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    get idComputadoras(){
        return this._idComputadora;
    }
    toString() {
        return  `COMPUTADORA ${this._idComputadora}:\n[Nombre:${this._nombre} \n${this._monitor} \n ${this._raton} \n ${this._teclado} \n]`
    }

}

let compu1 = new Computadora(`Ryzen`,monitor1,raton1,teclado1);
console.log(compu1.toString());

let compu2 = new Computadora(`Intel`,monitor2,raton2,teclado2);
console.log(compu2.toString());

