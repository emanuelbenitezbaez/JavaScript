//OBJETOS

//DEFINICION DE UN OBEJETO
//TENER EN CUENTA QUE UNNOBJETO ES UN TIPO DE DATO COMPLEJO Y ES MUTABLE.

let persona = {
    nombre: `Emanuel`,
    apellido:`Benitez Baez`,
    Documento: 93884916,
    Ciudad: `Buenos Aires`,
    nombreCompleto: function () {//esto es una expresion de función
      return `${this.nombre} ${this.apellido}`
    }

};
//ACCEDEMOS AL OBJETO
console.log(persona.Ciudad);
console.log(persona[`Documento`]);
console.log(persona);

console.log(persona.nombreCompleto());
//AGREGAR O ELIMINAR UNA PROPIEDAD EN EL OBJETO

//En este ejemplo, se crea un objeto vacío y
// luego se le asigna una nueva propiedad llamada "propiedadNueva" con el valor "valorNuevo".
persona.telefono=`1166209448`;
const objeto = {};
objeto.propiedadNueva = "valorNuevo";

//ELIMINAMOS UNA PROPIEDAD EN EL OBJETO
//delete + objeto + propiedad o funcion a eliminar.
delete persona.nombreCompleto;
delete persona.nombre;
console.log(persona); 



//IMPRIMIR PROPIEDADES DE UN OBJETO(CONSOLE.LOG,FOR IN , FOR OFF, JSON STRINGFY, OBJECT.VALUES).
//TENER EN CUENTA QUE SI IMPRIMIMOS EL OBJETO COMPLETO, NO VEREMOS LOS VALORES DE LAS PROPIEDADES.
//RECORREMOS UN OBJETO E IMPRIMIMOS(FOR IN).

for(values in persona){
    console.log(values);
    console.log(persona[values]);
}


const objetoPrueba = {
    propiedad1: "valor1",
    propiedad2: 42,
    propiedad3: true
  };
  
  const json = JSON.stringify(objetoPrueba);
  console.log(json);
  

  //ESTA ES OTRA MANERA
  let valores = Object.values(objetoPrueba);
  console.log(valores);
