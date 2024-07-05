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
