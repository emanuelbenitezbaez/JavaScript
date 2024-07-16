//CALLBACK EJEMPLO:
function comprar (articulo1,articulo2,mostrar){

    let gastado = articulo1 + articulo2;

    mostrar(gastado);
}

function mostrarTotal (mensaje) {
console.log(`Gastado: $${mensaje }`);
}

comprar(15,25, mostrarTotal);
comprar(115,125, mostrarTotal);