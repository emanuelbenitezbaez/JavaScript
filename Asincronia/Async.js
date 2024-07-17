//ASYNC CON USO DE THROW

async function mayor (edad) {
    if (edad >= 18){
        return "Usted ya es mayo de edad."
    }else {
        throw "Usted no es mayor de edad."
    }
}

mayor(18).then((res) => {
console.log("Usted ya es mayo de edad");

}).catch((err) => {
console.log("Usted no es mayor de edad");
});

//////////////////////////////////

//ASYNC CON PROMESA EXPLICITA

async function mayor2 (edad) {
    return new Promise((res,rej) => {
        if (edad >= 18){
            res( "Usted ya es mayo de edad.");
        }else {
            rej("Usted no es mayor de edad.");
        }
    });
}

mayor2(10).then((res) => {
console.log("Usted ya es mayo de edad");

}).catch((rej) => {
console.log("Usted no es mayor de edad");
});