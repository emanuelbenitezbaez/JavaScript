//PROGRAMACION ORIENTADO A OBJETOS

//CREACION DE UNA CLASE:

function persona(nombre) {
    this.nombre = nombre;//CONSTRUCTOR QUE SE EJECUTA CUANDO HACEMOS UNA INSTANCIA DE LA CLASE
    console.log(`Hola, mi nombre es : ${nombre} `);
}

//LLAMADA A LA FUNCION EN POO, SE HACE DE FORMA DIFERENTE.
let objetoPersona = new persona(`Emanuel`);//INSTANCIA DE LA CLASE PERSONA.

function person(nombre, apellido, edad) {
    this.nombre = nombre;//CONSTRUCTOR QUE SE EJECUTA CUANDO HACEMOS UNA INSTANCIA DE LA CLASE
    this.apellido = apellido;//
    this.edad = edad;

    console.log(`Hola, mi nombre es : ${nombre} `);
    console.log(`Hola, mi apellido es : ${apellido} `);
    console.log(`Hola, mi edad es : ${edad} `);
}

let padre = new person (`Padre`,`Padre`,20);
console.log(padre);
let madre = new person (`Madre`,`Madre`,20);
console.log(madre);


let objetoPerson = new person(`Emanuel`,`Benitez Baez`,20);//INSTANCIA DE LA CLASE PERSONA.

