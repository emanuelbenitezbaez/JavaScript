//SISTEMA DE VENTAS:
class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }

    toString() {
        return `Id Producto:${this._idProducto} Nombre:${this._nombre} Precio:$${this._precio}`;
    }
}

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

//CRECION DE PRODUCTOS
let producto1 = new Producto(`Coca Cola`, 2500);
let producto2 = new Producto(`Pepsi`, 2200);
let producto3 = new Producto(`Budin`, 1500);


console.log(producto1.toString());

console.log(producto2.toString());

console.log(producto3.toString());

let orden1 = new Orden();
let orden2 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden2.agregarProducto(producto1);
orden2.agregarProducto(producto3);

orden1.mostrarOrden();
orden2.mostrarOrden();
