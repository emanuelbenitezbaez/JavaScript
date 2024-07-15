//LLAMADAS ASINCRONAS CON EL USO DE SET TIME OUT
//LA LLAMADAS A LAS FUNCIONES YA NO SON SECUENCIALES.


function myFunctionCallback() {
    console.log("Soy una funcion asincrona despues de 3 segs.")
}

setTimeout(myFunctionCallback,3000);//SE EJECUTA DESPUES DE 3 SEGS.
//TAMBIEN SE PUEDE DECLARAR LA FUNCION DENTRO DEL SET TIME OUT.
setTimeout(function(){console.log("Otra funcion asincrona")},5000);  

//TAMBIEN SE PUEDE DECLARAR UNA FUNCION FLECHA
setTimeout(  () => {console.log("Otra funcion asincrona")},6000);