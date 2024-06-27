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
console.log('///////////////////////////FOR/////////////////////////////////////');

let acumulador=0;

for(let i = 1;i<=5;i++){

    console.log(`${acumulador} + ${i} `);
    acumulador = acumulador + i;
console.log(acumulador);
    
}
console.log('///////////////////////////WHILE/////////////////////////////////////');

let numero=5;
let contador=1;
let acumulador1=0;
while(contador<=numero){

    console.log(`${acumulador1} + ${contador} vuelta`);
    acumulador1 = acumulador1 + contador;
    console.log(`${acumulador1} `);
    contador++;
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

//Escribe un programa que imprima los números del 1 al 10.
let maximo = 20;
for(let i = 1; i <= maximo; i++){
    console.log(i);
}
//Escribe un programa que imprima los números pares del 1 al 20
let maximo1 = 20;
for(let i = 1; i <= maximo1; i++){

    if(i%2 == 0) {
        console.log(i);
    }
        
 }
 //Escribe un programa que imprima los números impares del 1 al 20.
 let maximo2 = 20;
for(let i = 1; i <= maximo2; i++){

    if(i%2  !== 0) {
        console.log(i);
    }
        
 }

 //Escribe un programa que imprima los múltiplos de 3 del 1 al 100.


 console.log("================================");
 let maximo3 = 100;
 for(let i = 0; i <= maximo3; i++){
 
     if(i%3 == 0) {
         console.log(i);

     }
         
  }