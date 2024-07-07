//STATIC: Se utiliza para asociar un metodo a una clase especifica y no con los objetos.


class Person {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    get surname() {
        return this._surname;
    }
    set surname(surname) {
        this._surname = surname;
    }
    //Static: se asocia con nuestra clase y no con los objetos
    static saludar(){
        console.log("Saludos desde static!");
    }
    static saludos(persona){
       console.log(persona.name);
    }
}

class Empleado extends Person {
    constructor(name,surname,departament){//Para poder crear objetos de la clase hija debemos utilizar el metodo super()
        super(name,surname);//se tiene que llamar al constructor de la clase padre con super.
        this._departament = departament;
    }
    get departament() {
        return this._departament;
    }
    set departament(departament) {
        this._departament = departament;
    }

}

//CREAMOS OBJETOS DE LA CLASE PADRE
let person1 = new Person(`Juan`,`Suarez`);
console.log(person1);
person1._name = `Carlos`;//set name
console.log(person1._name);//get name

//CREAMOS OBJETOS DE LA CLASE HIJA EMPLEADO.
let empleado1 = new Empleado(`Emanuel`,`Benitez Baez`,`Sistemas`);
console.log(empleado1);
console.log(empleado1._name);
//NO ES POSIBLE LLAMAR UN METODO STATIC DESDE UN OBJETO.
//person1.saludar();
//PERO SI ES POSIBLE LLAMAR UN METODO STATIC DESDE UNA CLASE.
Person.saludar();

//METODO STATIC DESDE LA CLASE PADRE, LE PASA POR PARAMETRO UN OBJETO.
Person.saludos(person1);
// METODO STATIC DESDE LA CLASE HIJA, LE PASO POR PARAM UN OBJETO CREADO DE LA CLASE HIJA.
Empleado.saludos(empleado1);

