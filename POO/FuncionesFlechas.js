//FUNCIONES FLECHA

//Funcion flecha(no aplica variable hoisting)
//Funcion flecha que no devuelve nada.
const myFuncionFlecha = () => {
    console.log("Saludos desde mi funcion flecha!");
}

//Funcion flecha que devuelve algo.
const saludar = () => {
    'Saludos humanos, desde funcion flecha.';
}

//Funcion flecha reducida que devuelve algo.
const saludando = () => 'Saludos humanos, desde funcion flecha reducida.';

//FUNCION FLECHA QUE DEVUELVE UN OBJETO.
const devolviendoObjetos = () => ({
    name: 'Carl',
    surname: 'Carlson'
})
//FUNCION FLECHA QUE RECIVE UN PARAMETRO
const resiviendoParametro = (mensaje) => {
return mensaje;
}
//FUNCION FLECHA QUE RECIVE VARIOS PARAMETROS
const resiviendoVariosParametros =(a,b) => {
    let resultado = a +b;
    return `Resultado: ${ resultado}`;
}



//LLAMADA A LAS FUNCIONES

myFuncionFlecha();
console.log(saludar());
console.log(saludando());
console.log(devolviendoObjetos()); 
console.log(resiviendoParametro(`Hola`)); 
console.log(resiviendoVariosParametros(6,4)); 