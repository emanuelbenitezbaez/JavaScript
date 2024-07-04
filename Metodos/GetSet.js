//METODOS GET Y SET

//PODEMOS AGREGAR LOS METODOS GET Y SET PARA ACCEDER O MODIFICAR VALORES DE NUESTROS ATRIBUTOS.

class Persona{//nombre de la clase.

    constructor(name,surname){
      this._name = name;//atributos de la clase.
      this._surname = surname;
    }

    get name(){
        return this.name;
    }


    set name(name){
        this._name= name;
    }
}

let persona1 =new Persona(`EMailed`,`Nomb`);
console.log(persona1._name);
persona1.name=`EMail`;
console.log(persona1._name);