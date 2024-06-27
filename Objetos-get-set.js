//OBJETOS: GET , SET


//DECLARACION DE UN OBJETO
let persona = {
    nombre: `Emanuel`,
    apellido:`Benitez Baez`,
    Documento: 93884916,
    Ciudad: `Buenos Aires`,
    nombreCompleto: function () {//esto es una expresion de función
      return `${this.nombre} ${this.apellido}`
    }

};

console.log(persona.nombreCompleto());

//UTILIZAMOS GET PARA INDICAR QUE QUEREMOS ACCEDER A UNA PROPIEDAD DE NUESTRO OBJETO
let personas = {
    nombre: `Sofia`,
    apellido:`Terrile`,
    Documento: 35568789,
    Ciudad: `Buenos Aires`,
    get fullName () {// METODO GET PARA ACCEDER AESTA PROPIEDAD
      return `${this.nombre} ${this.apellido}`
    }

};
console.log(personas.fullName);
console.log(personas);



//UTILIZAMOS GET PARA INDICAR QUE QUEREMOS ACCEDER A UNA PROPIEDAD DE NUESTRO OBJETO
let person = {
    nombre: `Ron`,
    apellido:`Mackalister`,
    Documento: 65464654684,
    idioma:`es`,
    Ciudad: `Buenos Aires`,
    get lang () {//METODO GET PARA ACCEDER A ESTA PROPIEDAD
return this.idioma.toUpperCase();
    },
    //USAMOS EL METODO SET PARA MODIFICAR UNA PROPIEDAD
    set lang (lang) {//METODO SET PARA MODIFICAR UNA PROPIEDAD.
this.idioma = lang.toUpperCase();
    },
    get fullName () {// METODO GET PARA ACCEDER A ESTA PROPIEDAD
      return `${this.nombre} ${this.apellido}`
    }
};
console.log(person.lang);
console.log(person);

person.lang = `en`;

console.log(person.lang);