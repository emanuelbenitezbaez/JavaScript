//EJERCICIOS MANEJO DE ERRORES:

let resultado = ``;

try {
if (isNaN(resultado)) {
    throw 'Error, no es un numero';
}else if(resultado === ``){
    throw 'Error, cadena vacia.';
}else if(resultado >= 0 ){
    throw 'El valor es positivo';
}else if(resultado < 0 ){
    throw 'El valor es negativo';
}
}catch(e){
    console.log(e);
    
    console.log(e.name);
    
    console.log(e.message);
}finally{
    console.log("Se ejecuta igual");
}