//METODO CALL

let persona = {
    nombre:`Juan`,
    apellido:`Perez`,
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`;
    }
}
console.log(persona.nombreCompleto());

let persona1 = {
    nombre:`Carlos`,
    apellido:`Perez`,
    
}
//USAMOS CALL() PARA USAR EL METODO NOMBRECOMPLETO CON LOS ATRIBUTOS DEL OBJETO PERSONA1
// EN ESTE CASO PUDIMOS UTILIZAR EL METODO CREADO EN EL PRIMER OBJETO CON LOS ATRIBUTOS DEL OBJETO SEGUNDO SIN LA NECESIDAD DE VOLVER A DECLARAR OTRO METODO.


console.log(persona.nombreCompleto.call(persona1));
