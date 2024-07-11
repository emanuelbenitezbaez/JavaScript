//FUNCIONES FLECHA, DIFERENCIA CON OTRAS FUNCIONES.


//Funcion clasica

function myFuncionClasica() {
    console.log(`Saludos desde mi funcion clasica!`);
}

//Funcion anonima

const myFuncionAnonima = function () {
    console.log(`Saludos desde mi funcion anonima!`);
}

//Funcion flecha(no aplica variable hoisting)

const myFuncionFlecha = () => {
    console.log("Saludos desde mi funcion flecha!");
}


//LLAMADA A LAS FUNCIONES
myFuncionClasica();
myFuncionAnonima();
myFuncionFlecha();
