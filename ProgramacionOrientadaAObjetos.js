//PROGRAMACION ORIENTADA A OBJETOS
//DECLARACION DE OBJETOS(pares de clave == valor)
//LOS OBJETOS PUEDEN TENER PROPIEDADES,METODOS,ARRAYS Y OTROS OBJETOS DENTRO.

let persona = {

    nombre: `Nombre`,
    apellido: `Apellido`,
    edad: 10,
    imprimir: function () {
        return this.nombre, this.apellido;
    },
    hobbies: [`leer`, `programar`, `correr`],
    direccion: {
        street: `Chimondegui`,
        city: `Monte Grande`
    }

}
console.log(persona);


//TAMBIEN SE PUEDE CREAR OBJETOS VACIOS

let emptyObject= {

}

console.log(emptyObject);
