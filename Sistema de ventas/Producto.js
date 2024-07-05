//PRODUCTO
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
        return `Id Producto:${this._idProducto} Nombre:${this._nombre} Precio:${this._precio}`;
    }
}

//CRECION DE PRODUCTOS
let producto1 = new Producto(`Coca Cola`,2500);
let producto2 = new Producto(`Pepsi`,2200);
let producto3 = new Producto(`Budin`, 1500);


console.log(producto1.toString());

console.log(producto2.toString());

console.log(producto3.toString());
