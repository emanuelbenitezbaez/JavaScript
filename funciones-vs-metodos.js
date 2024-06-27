//FUNCIONES VS METODOS
//CAPACIDADES QUE TIENEN LAS FUNCIONES AL IGUAL QUE OTROS OBEJETOS.

// 1 - FUNCIONES QUE PODEMOS PASAR COMO ARGUMENTOS A OTRAS FUNCIONES ==> CALLBACK

//ESTO SE CONOCE COMO DECLARACION DE FUNCION.

function a() {

}

function b(a) {

}

b(a);

//2 - RETORNAR OTRAS FUNCIONES

function a() {
    function b() { }
    return b;
}

//3- ASIGNAR FUNCIONES A VARIABLES.
// Podemos asignar funciones a las variables, tener en cuenta que no se le debe poner nombre a l funcion.
//Toma el nombre de la variable.
// ESTO SE CONOCE TAMBIEN COMO EXPRESION DE FUNCION.

const ab = function () { }

//4- LAS FUNCIONES PUEDEN TENER PROPIEDADES O METODOS asociado para diferentes fines.

function propietodos() { }

const obj = {}
propietodos.call(obj);

//5- ANIDAR FUNCIONES - NESTED FUNCTIONS

function a() {
    function b() {
        function C() {

        }
        C();
    }
    b();
}
a();

// ES POSIBLE ALMACENAR FUNCIONES EN OBEJETOS? SI.
//A ESTO LO CONOCEMOS COMO METODOS.

const rocket = {

    name: 'Nine',
    launchMessage : function launchMessage(){
        console.log('Rocket Launched!"!"!!"!');
    } 
}

rocket.launchMessage();
