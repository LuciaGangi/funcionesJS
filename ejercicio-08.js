// Función sin parámetros que devuelve siempre "true"
function siempreTrue() {
  return true;
}

// Función asíncrona que utiliza un setTimeout y pasa por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function promesa() {
  await setTimeout(() => {
    console.log("Hola soy una promesa");
  }, 5000);
}

// Función generadora de índices pares automáticos
function* generadorPares() {
  let indice = 0;
  while (true) {
    yield indice;
    indice += 2;
  }
}

const generador = generadorPares();
console.log(generador.next().value); // 0
console.log(generador.next().value); // 2
console.log(generador.next().value); // 4
