//METODO MATH
//METODO RAIZ CUADRADA(SQRT)
const numero = 25;
const raizCuadrada = Math.sqrt(numero);
console.log("Raíz cuadrada de 25:", raizCuadrada); // Resultado: 5


//METODO POTENCIA(POW)
const base = 4;
const exponente = 3;
const potencia = Math.pow(base, exponente);
console.log("4 elevado a 3:", potencia); // Resultado: 64


//METODO REDONDEO

const numeroDecimal = 8.78;
const numeroRedondeadoConRound= Math.round(numeroDecimal);
console.log(`Redondeado con round: ${numeroRedondeadoConRound}`);
const numeroRedondeadoHaciaAbajo = Math.floor(numeroDecimal);
const numeroRedondeadoHaciaArriba = Math.ceil(numeroDecimal);
console.log("Redondeado hacia abajo:", numeroRedondeadoHaciaAbajo); // Resultado: 5
console.log("Redondeado hacia arriba:", numeroRedondeadoHaciaArriba); // Resultado: 6

//METODO PARA OBTENER UN NUMERO ALEATORIO

const numeroAleatorio = Math.random();
console.log("Número aleatorio entre 0 y 1:", numeroAleatorio); // Resultado: un valor entre 0 y 1 (cada vez que se ejecuta)

// Obtener un número aleatorio entre 1 y 10 (sin incluir el 10):
const numeroAleatorioEntre1y10 = Math.floor(numeroAleatorio * 10) + 1;
console.log("Número aleatorio entre 1 y 10:", numeroAleatorioEntre1y10); // Resultado: un valor entre 1 y 9 (cada vez que se ejecuta)

//METODO PARA OBTENER UN NUMERO ABSOLUTO

const numeroNegativo = -10;
const valorAbsoluto = Math.abs(numeroNegativo);
console.log("Valor absoluto de -10:", valorAbsoluto); // Resultado: 10

// Obtener un valor aleatorio entre un rango:
function numeroAleatorioEntreRango(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }
  
  const numeroAleatorioEntre10y20 = numeroAleatorioEntreRango(10, 20);
  console.log("Número aleatorio entre 10 y 20:", numeroAleatorioEntre10y20); // Resultado: un valor entre 10 y 20 (cada vez que se ejecuta)
  