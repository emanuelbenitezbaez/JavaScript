//METODO APPLY

let persona = {
    nombre:`Juan`,
    apellido:`Perez`,
    nombreCompleto: function(titulo,telefono){
        return `${titulo} ${this.nombre} ${this.apellido}  ${telefono}`;
    }
}
console.log(persona.nombreCompleto(`Lic.`,`46934789`));

let persona1 = {
    nombre:`Carlos`,
    apellido:`Perez`,
    
}
//USAMOS APPLY() PARA USAR EL METODO NOMBRECOMPLETO CON LOS ATRIBUTOS DEL OBJETO PERSONA1
// EN ESTE CASO PUDIMOS UTILIZAR EL METODO CREADO EN EL PRIMER OBJETO CON LOS ATRIBUTOS DEL OBJETO SEGUNDO SIN LA NECESIDAD DE VOLVER A DECLARAR OTRO METODO.
//LA DIFERENCIA CON EL METODO CALL ES QUE AL METODO APPLY SE LE PUEDE PASAR ARGUMENTOS. Y TIENEN QUE SER UN ARREGLO.
let array = [`Lic.`,`46934789`];
console.log(persona.nombreCompleto.apply(persona1,array));

