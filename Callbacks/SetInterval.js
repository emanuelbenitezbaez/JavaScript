//SET INTERVAL

//A DIFERENCIA DE SET TIME OUT, SET INTERVAL MANDA A LLAMAR A LA FUNCION CADA CIERTO TIEMPO.

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}: `);

}
setInterval(reloj, 10000);