//CLASES 
//A DIFERENCIA DE LOS OBJETOS , UNA CLASE ES UNA PLANTILLA.
//POSEE NOMBRE, ATRIBUTOS Y METODOS
//A DIFERENCIA DE LOS OBJETOS QUE SON UNA INSTANCIA DE UNA CLASE


class Persona{//nombre de la clase.

    constructor(name,surname){
      this.name = name;//atributos de la clase.
      this.surname = surname;
    }

}

//creamos un nuevo objeto de tipo persona. Se manda a llamar el constructor de la clase.
let Persona1 = new Persona(`Emanuel`,`Baez`);

//SE IMPRIME EL OBJETO DE TIPO PERSONA.
console.log( Persona1);

//creamos un nuevo objeto de tipo persona. Se manda a llamar el constructor de la clase.
let Persona2 = new Persona(`Teodocio`,`Benitez`);

//SE IMPRIME EL SEGUNDO OBJETO DE TIPO PERSONA.
console.log( Persona2);