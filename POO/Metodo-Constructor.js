//METODO CONSTRUCTOR
//COMO CREAR LOS METODOS A TRAVEZ DEL CONSTRUCTOR

let user = {
    name: `Emanuel`,
    lastname: `Benitez Baez`,
    city: `Buenos Aires`,
    age: 35,
    showFullname: function () {//esto es una expresion de función
        return `${this.name} ${this.lastname}`
    }

};

console.log(user);
console.log(user.showFullname());


console.log(`/////////////////////////////////////////////////////////////////////////////`)

//ESTO NO ES PRACTICO SI TENEMOS QUE CREAR VARIOS OBJETOS DEL TIPO USER.

let user1 = {
    name: `John`,
    lastname: `Doe`,
    city: `Buenos Aires`,
    age: 55,
    showFullname: function () {//esto es una expresion de función
        return `${this.name} ${this.lastname}`
    }

};

console.log(user1);
console.log(user1.showFullname());

//POR ESO USAMOS UN METODO CONSTRUCTOR(FUNCIONES QUE NOS PERMITEN CREAR OBJETOS CON PROPIEDADES Y METODOS)
//CREAMOS UN COSTRUCTOR


//FUNCION CONSTRUCTOR DE OBJETOS DE TIPO PERSONA


function Persona(nombre,apellido,email,showFullname){
this.nombre = nombre;
this.apellido = apellido;
this.email = email;
this.showFullname = function showFullname(){
    return `${this.nombre} ${this.apellido} `
}

}

let persona1 = new Persona(`Ema`,`Baez` ,`Email@example.com`);

console.log(persona1);
console.log(persona1.showFullname());

let persona2 = new Persona(`Pau`,`Federico` ,`Email@example.com`);

console.log(persona2);