//ORDEN
class Orden {
    static contadorOrdenes = 0;

    constructor() {

        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;

    }

    get idOrden() {
        return this._idOrden;
    }
    static get MAX_PRODUCTOS() {
        return 5;
    }
    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto); //esta forma es mas corta y sencilla.
            //this._productos[this_contadorProductosAgregados++] = producto;
        }
        else {
            console.log("No puede agregar mas productos.    ");
        }
    }

    calcularTotal() {
        let totalVenta = 0;
        for (let producto of this._productos) {
            totalVenta =totalVenta + producto.precio
        }
        return totalVenta;
    }

    mostrarOrden() {
        let ordenProductos = "";
        for (let producto of this._productos) {
            ordenProductos =  ordenProductos + producto.toString();
        }

        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${ordenProductos}`);
    }
}