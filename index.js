/*
let numero= 10;
for(let i=1;i<=numero;i=i+3){

    console.log(i);
}
let numeroMinimo=0;
for(let i=10;i>=numeroMinimo;i=i-3){

    console.log(i);
}
*/
//Realizar la suma de los primeros 5 numeros usando un ciclo for.
//1+2+3+4+5

let acumulador=0;

for(let i = 1;i<=5;i++){
    acumulador = acumulador + i;
console.log(acumulador);
    
}
console.log('///////////////////////////WHILE/////////////////////////////////////');

let numero=5;
let contador=0;
let acumulador1=0;
let vueltas=0;
while(contador<numero){
     vueltas =contador++;
     
    acumulador1 = acumulador1 + contador;
    
    console.log(`Vuelta: ${vueltas}, acumulado ${acumulador1} `);
}
console.log('//////////////////////////DO-WHILE//////////////////////////////////////');

let numero1=5;
let contador1=0;
let acumulador2=0;
do{
    contador1++;
    acumulador2 = acumulador2 + contador1;
    console.log(acumulador2);
   
}while(contador1<numero1);

console.log('////////////////////////////////////////////////////////////////');

