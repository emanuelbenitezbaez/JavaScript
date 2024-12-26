


function findLastFourDigits(position) {
  // Inicializar los primeros tres números de la secuencia
  let a = 2023,
    b = 2024,
    c = 2025;

  // La posición de los dígitos que necesitamos
  position = position % 10000;

  // Usar una lista para almacenar solo los últimos cuatro dígitos de cada número
  let seq = [a % 10000, b % 10000, c % 10000];

  // Generar la secuencia hasta alcanzar la posición deseada
  for (let i = 3; i < position; i++) {
    let nextNum =
      (seq[seq.length - 3] + seq[seq.length - 2] + seq[seq.length - 1]) % 10000;
    seq.push(nextNum);
  }

  // El último número de la secuencia será el requerido
  return seq[seq.length - 1];
}

// Posición en la que necesitamos encontrar el número
let position = 2023202320232023;
console.log("Los últimos cuatro dígitos son:", findLastFourDigits(position));
